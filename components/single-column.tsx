// Layout a colonna singola, conforme ATS: titoli di sezione standard, testo selezionabile,
// nessuna tabella o colonna. Ogni template passa il proprio CSS module e qualche opzione.
import { cv } from "@/lib/cv";
import Toolbar from "@/app/toolbar";

type Styles = Record<string, string>;

export type SingleColumnOptions = {
  photo?: boolean;
  stats?: boolean;
  /** Testo decorativo prima del nome, es. un prompt di terminale. */
  prompt?: string;
  /** Prefisso decorativo dei titoli di sezione, es. "$ " o "// ". */
  headingPrefix?: string;
  /** Cognome in uno span separato (s.nameLast) per evidenziarlo. */
  splitName?: boolean;
  fontClass?: string;
};

function Heading({ s, prefix, children }: { s: Styles; prefix?: string; children: string }) {
  return (
    <h2 className={s.heading}>
      {prefix && (
        <span className={s.headingPrefix} aria-hidden>
          {prefix}
        </span>
      )}
      {children}
    </h2>
  );
}

function ExtLink({ href, children }: { href?: string; children: React.ReactNode }) {
  if (!href) return <>{children}</>;
  return (
    <a className="ext" href={href}>
      {children}
    </a>
  );
}

function Bullets({ s, items }: { s: Styles; items: { lead?: string; text: string }[] }) {
  return (
    <ul className={s.bullets}>
      {items.map((b, i) => (
        <li key={i}>
          {b.lead && <strong>{b.lead}: </strong>}
          {b.text}
        </li>
      ))}
    </ul>
  );
}

function Footer({ s, page }: { s: Styles; page: number }) {
  return (
    <footer className={s.footer}>
      <span>
        {cv.name} · {cv.title}
      </span>
      <span>{page} / 2</span>
    </footer>
  );
}

export default function SingleColumn({ s, options = {} }: { s: Styles; options?: SingleColumnOptions }) {
  const o = options;
  return (
    <main className={`sheets ${o.fontClass ?? ""}`}>
      <Toolbar />

      <section className={`page ${s.page}`}>
        <header className={s.header}>
          <div className={s.headerText}>
            {o.prompt && (
              <p className={s.prompt} aria-hidden>
                {o.prompt}
              </p>
            )}
            <h1 className={s.name}>
              {o.splitName ? (
                <>
                  {cv.name.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className={s.nameLast}>{cv.name.split(" ").at(-1)}</span>
                </>
              ) : (
                cv.name
              )}
            </h1>
            <p className={s.title}>{cv.title}</p>
            <ul className={s.contacts}>
              <li>{cv.location}</li>
              {cv.contacts.map((c) => (
                <li key={c.href}>
                  <a className={c.href.startsWith("http") ? "ext" : undefined} href={c.href}>
                    {c.label}
                  </a>
                </li>
              ))}
              <li>{cv.license}</li>
            </ul>
          </div>
          {o.photo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img className={s.photo} src={cv.photo} alt={`Foto di ${cv.name}`} />
          )}
        </header>

        <Heading s={s} prefix={o.headingPrefix}>
          Profilo
        </Heading>
        <p className={s.profile}>{cv.profile}</p>

        {o.stats && (
          <ul className={s.stats}>
            {cv.stats.map((st) => (
              <li key={st.label}>
                <strong>{st.value}</strong> {st.label}
              </li>
            ))}
          </ul>
        )}

        <Heading s={s} prefix={o.headingPrefix}>
          Competenze
        </Heading>
        <ul className={s.skills}>
          {cv.skills.map((g) => (
            <li key={g.group}>
              <strong>{g.group}:</strong> {g.items.join(", ")}
            </li>
          ))}
        </ul>

        <Heading s={s} prefix={o.headingPrefix}>
          Esperienza
        </Heading>
        {cv.experience.map((job) => (
          <article key={job.company} className={s.entry}>
            <div className={s.entryHead}>
              <h3>
                {job.role} — <ExtLink href={job.companyHref}>{job.company}</ExtLink>
              </h3>
              <span className={s.period}>{job.period}</span>
            </div>
            <p className={s.meta}>
              {job.place}
              {job.note && ` · ${job.note}`}
            </p>
            {job.intro && <p className={s.intro}>{job.intro}</p>}
            <Bullets s={s} items={job.bullets} />
          </article>
        ))}

        <Footer s={s} page={1} />
      </section>

      <section className={`page ${s.page}`}>
        <Heading s={s} prefix={o.headingPrefix}>
          Progetti
        </Heading>
        {cv.projects.map((p) => (
          <article key={p.name} className={s.entry}>
            <div className={s.entryHead}>
              <h3>
                <ExtLink href={p.href}>{p.name}</ExtLink>
                <span className={s.context}> — {p.context}</span>
              </h3>
              <span className={s.period}>{p.period}</span>
            </div>
            {p.award && <p className={s.award}>{p.award}</p>}
            <p className={s.intro}>{p.text}</p>
            {p.bullets && <Bullets s={s} items={p.bullets} />}
          </article>
        ))}

        <Heading s={s} prefix={o.headingPrefix}>
          Formazione
        </Heading>
        {cv.education.map((e) => (
          <article key={e.title} className={s.entry}>
            <div className={s.entryHead}>
              <h3>
                {e.title} — <ExtLink href={e.schoolHref}>{e.school}</ExtLink>
              </h3>
              <span className={s.period}>{e.period}</span>
            </div>
            {e.text && <p className={s.intro}>{e.text}</p>}
          </article>
        ))}

        <Heading s={s} prefix={o.headingPrefix}>
          Lingue
        </Heading>
        <p className={s.inline}>{cv.languages.map((l) => `${l.name} (${l.level})`).join(" · ")}</p>

        <p className={s.privacy}>{cv.privacy}</p>
        <Footer s={s} page={2} />
      </section>
    </main>
  );
}
