// Controllo ATS: per ogni template genera il PDF dall'export statico (eseguire prima `next build`),
// ne estrae il testo con pdftotext come farebbe un parser e verifica completezza e ordine.
import { execFileSync } from "node:child_process";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { cv } from "../lib/cv.ts";
import { templates as templateList } from "../lib/templates.ts";

const templates = templateList.map((t) => [t.label, t.href]);

const dir = mkdtempSync(join(tmpdir(), "cv-ats-"));
// NFKC scompone le legature tipografiche (ﬁ, ﬂ) che alcuni font producono.
const norm = (t) => t.normalize("NFKC").replace(/\s+/g, " ").toLowerCase();

// Dati che un parser deve trovare.
const required = [
  cv.name,
  cv.contacts[0].label,
  cv.contacts[1].label,
  ...cv.experience.map((j) => j.company),
  ...cv.projects.map((p) => p.name),
  ...cv.education.map((e) => e.school),
];

const jobAnchors = cv.experience.map((j) => [j.company, j.bullets[0].text.slice(0, 40)]);

const rows = [];
for (const [name, route] of templates) {
  const pdf = join(dir, `${name}.pdf`);
  execFileSync("node", ["scripts/pdf.mjs", pdf, route], { stdio: "ignore" });
  const text = norm(execFileSync("pdftotext", [pdf, "-"]).toString());

  const missing = required.filter((r) => !text.includes(norm(r)));

  const order = ["esperienza", "progetti", "formazione"].map((h) => text.indexOf(h));
  const sectionsOk = order.every((i, k) => i >= 0 && (k === 0 || i > order[k - 1]));

  // Per ogni esperienza: il primo punto (testo unico) deve avere l'azienda subito prima,
  // dopo il punto dell'esperienza precedente.
  let jobsOk = true;
  let last = -1;
  for (const [company, bullet] of jobAnchors) {
    const b = text.indexOf(norm(bullet), last + 1);
    const c = b < 0 ? -1 : text.lastIndexOf(norm(company), b);
    if (b < 0 || c <= last) jobsOk = false;
    last = Math.max(last, b);
  }

  const ok = missing.length === 0 && sectionsOk && jobsOk;
  rows.push({
    template: name,
    esito: ok ? "OK" : "ATTENZIONE",
    dati: missing.length ? `mancano: ${missing.join(", ")}` : "completi",
    sezioni: sectionsOk ? "in ordine" : "fuori ordine",
    esperienze: jobsOk ? "coerenti" : "testo mescolato",
  });
}

console.table(rows);
