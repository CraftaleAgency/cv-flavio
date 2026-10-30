import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Esporta un sito statico in out/, da cui si genera il PDF.
  output: "export",
  turbopack: {
    rules: {
      "globals.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
