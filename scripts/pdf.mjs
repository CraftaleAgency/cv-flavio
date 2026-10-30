// Genera il PDF a partire dall'export statico in out/ (eseguire prima `next build`).
// Uso: node scripts/pdf.mjs [file.pdf] [/template]
// Serve out/ su una porta locale e stampa la pagina con Chrome headless.
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import { extname, join, resolve } from "node:path";

const root = resolve("out");
const output = resolve(process.argv[2] ?? "Flavio_Biondo_CV.pdf");
const route = process.argv[3] ?? "/";
const chrome =
  process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".woff2": "font/woff2",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".ico": "image/x-icon",
};

const server = createServer(async (req, res) => {
  let path = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (path.endsWith("/")) path += "index.html";
  else if (!extname(path)) path += ".html";
  try {
    const body = await readFile(join(root, path));
    res.writeHead(200, { "content-type": types[extname(path)] ?? "application/octet-stream" });
    res.end(body);
  } catch {
    res.writeHead(404).end();
  }
});

server.listen(0, "127.0.0.1", () => {
  const { port } = server.address();
  execFile(
    chrome,
    [
      "--headless",
      "--disable-gpu",
      "--no-pdf-header-footer",
      "--virtual-time-budget=5000",
      `--print-to-pdf=${output}`,
      `http://127.0.0.1:${port}${route}`,
    ],
    (err, _stdout, stderr) => {
      server.close();
      if (err) {
        console.error(stderr || err);
        process.exit(1);
      }
      console.log(`PDF creato: ${output}`);
    },
  );
});
