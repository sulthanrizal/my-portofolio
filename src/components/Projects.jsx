import Reveal from './Reveal'
import { projects } from '../data'

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 12 12 4M6 4h6v6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <Reveal>
        <p className="section__eyebrow">03 — Projects</p>
        <h2 className="section__title">
          Selected <span className="grad-text">work</span>.
        </h2>
      </Reveal>

      <div className="projects__grid">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.1}>
            <article className="card project" style={{ '--hue': p.hue }}>
              <div className="project__thumb" aria-hidden="true">
                <span className="project__index">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="project__orb" />
              </div>
              <div className="project__body">
                <p className="project__context">{p.context}</p>
                <h3>{p.title}</h3>
                <p className="project__desc">{p.description}</p>
                <ul className="chips">
                  {p.tech.map((t) => (
                    <li className="chip" key={t}>
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="project__links">
                  {p.links.length > 0 ? (
                    p.links.map((l) => (
                      <a
                        key={l.url}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project__link"
                      >
                        {l.label} <ArrowIcon />
                      </a>
                    ))
                  ) : (
                    <span className="pill pill--muted">{p.badge}</span>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
