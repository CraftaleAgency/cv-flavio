import type { Metadata } from "next";
import { cv } from "@/lib/cv";
import Toolbar from "../toolbar";
import s from "./terminal.module.css";

export const metadata: Metadata = { title: "Flavio Biondo — CV · Terminal" };

function Heading({ children }: { children: string }) {
  return (
    <h2 className={s.heading}>
      <span className={s.hash}>##</span> {children}
    </h2>
  );
}

function Lines({ items }: { items: { lead?: string; text: string }[] }) {
  return (
    <ul className={s.lines}>
      {items.map((b, i) => (
        <li key={i}>
          {b.lead && <strong>{b.lead}: </strong>}
          {b.text}
        </li>
      ))}
    </ul>
  );
}

function Footer({ page }: { page: number }) {
  return (
    <footer className={s.footer}>
      <span>flavio-biondo/cv · main</span>
      <span>
        {page}/2
      </span>
    </footer>
  );
}

export default function Terminal() {
  return (
    <main className="sheets">
      <Toolbar />

      <section className={`page ${s.page}`}>
        <header className={s.header}>
          <div className={s.headerText}>
            <p className={s.prompt}>
              <span className={s.user}>flavio@roma</span>:<span className={s.path}>~</span>$ whoami
            </p>
            <h1>{cv.name}</h1>
            <p className={s.title}>&gt; {cv.title}</p>
            <ul className={s.flags}>
              {cv.contacts.map((c) => (
                <li key={c.href}>
                  <a className={c.href.startsWith("http") ? "ext" : undefined} href={c.href}>
                    {c.label}
                  </a>
                </li>
              ))}
              <li>{cv.location}</li>
              <li>{cv.license}</li>
            </ul>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={s.photo} src={cv.photo} alt={`Foto di ${cv.name}`} />
        </header>

        <div className={s.body}>
          <p className={s.profile}>{cv.profile}</p>

          <ul className={s.stats}>
            {cv.stats.map((st) => (
              <li key={st.label}>
                <strong>{st.value}</strong>
                <span>// {st.label}</span>
              </li>
            ))}
          </ul>

          <div className={s.columns}>
            <div>
              <Heading>esperienza</Heading>
              <ol className={s.timeline}>
                {cv.experience.map((job) => (
                  <li key={job.company} className={s.commit}>
                    <div className={s.commitHead}>
                      <h3>
                        {job.role} @{" "}
                        {job.companyHref ? (
                          <a className="ext" href={job.companyHref}>
                            {job.company}
                          </a>
                        ) : (
                          job.company
                        )}
                      </h3>
                      <span className={s.period}>{job.period}</span>
                    </div>
                    <p className={s.meta}>
                      {job.place}
                      {job.note && ` · ${job.note}`}
                    </p>
                    {job.intro && <p className={s.intro}>{job.intro}</p>}
                    <Lines items={job.bullets} />
                    {job.stack && <p className={s.stack}>{job.stack.join(" · ")}</p>}
                  </li>
                ))}
              </ol>
            </div>

            <aside>
              <Heading>stack</Heading>
              <div className={s.code}>
                {cv.skills.map((g) => (
                  <p key={g.group}>
                    <span className={s.key}>{g.group}</span>
                    <span className={s.punct}>: [</span>
                    {g.items.join(", ")}
                    <span className={s.punct}>]</span>
                  </p>
                ))}
              </div>

              <Heading>premi</Heading>
              <ul className={s.awards}>
                {cv.awards.map((a) => (
                  <li key={a.event}>
                    <span className={s.check}>✓</span>
                    <div>
                      <a className="ext" href={a.href}>
                        {a.result}
                      </a>
                      <p>{a.event}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
        <Footer page={1} />
      </section>

      <section className={`page ${s.page}`}>
        <div className={`${s.body} ${s.bodyTop}`}>
          <Heading>progetti</Heading>
          <ol className={s.timeline}>
            {cv.projects.map((p) => (
              <li key={p.name} className={s.commit}>
                <div className={s.commitHead}>
                  <h3>
                    {p.href ? (
                      <a className="ext" href={p.href}>
                        {p.name}
                      </a>
                    ) : (
                      p.name
                    )}
                    <span className={s.context}> · {p.context}</span>
                  </h3>
                  <span className={s.period}>{p.period}</span>
                </div>
                {p.award && <p className={s.award}>★ {p.award}</p>}
                <p className={s.intro}>{p.text}</p>
                {p.bullets && <Lines items={p.bullets} />}
              </li>
            ))}
          </ol>

          <Heading>formazione</Heading>
          <div className={s.eduGrid}>
            {cv.education.map((e) => (
              <article key={e.title}>
                <div className={s.commitHead}>
                  <h3>{e.title}</h3>
                  <span className={s.period}>{e.period}</span>
                </div>
                <p className={s.meta}>
                  {e.schoolHref ? (
                    <a className="ext" href={e.schoolHref}>
                      {e.school}
                    </a>
                  ) : (
                    e.school
                  )}
                </p>
                {e.text && <p className={s.intro}>{e.text}</p>}
              </article>
            ))}
          </div>

          <Heading>lingue</Heading>
          <p className={s.code}>
            {cv.languages.map((l, i) => (
              <span key={l.name}>
                <span className={s.key}>{l.name.toLowerCase()}</span>
                <span className={s.punct}>: </span>
                {l.level}
                {i < cv.languages.length - 1 && <span className={s.punct}>{"   "}</span>}
              </span>
            ))}
          </p>
        </div>

        <p className={s.privacy}>{cv.privacy}</p>
        <Footer page={2} />
      </section>
    </main>
  );
}
