import Link from "next/link";
import { cv } from "@/lib/cv";
import { templates } from "@/lib/templates";

export default function Index() {
  return (
    <main className="index">
      <h1>{cv.name} — CV</h1>
      <p>Stessi contenuti (da lib/cv.ts), sei impaginazioni. Apri un template e usa «Salva come PDF».</p>
      <div className="cards">
        {templates.map((t) => (
          <Link key={t.href} href={t.href} className="card">
            <span className="card-swatch" style={{ background: t.swatch }} />
            <h2>{t.label}</h2>
            <p>{t.description}</p>
            <div className="card-tags">
              {t.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
