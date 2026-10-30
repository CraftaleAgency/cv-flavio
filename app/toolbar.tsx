"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { templates } from "@/lib/templates";

export default function Toolbar() {
  const pathname = usePathname();
  return (
    <nav className="toolbar">
      <div className="toolbar-links">
        <Link href="/">Indice</Link>
        {templates.map((t) => {
          const active = pathname === t.href || pathname === `${t.href}/`;
          return (
            <Link key={t.href} href={t.href} className={active ? "active" : undefined}>
              {t.label}
            </Link>
          );
        })}
      </div>
      <button type="button" onClick={() => window.print()}>
        Salva come PDF
      </button>
    </nav>
  );
}
