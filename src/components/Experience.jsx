import Reveal from './Reveal'
import { experience } from '../data'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <Reveal>
        <p className="section__eyebrow">02 — Experience</p>
        <h2 className="section__title">
          Where I&apos;ve <span className="grad-text">worked</span>.
        </h2>
      </Reveal>

      <div className="timeline">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.08} direction="left">
            <article className={`timeline__item ${job.current ? 'timeline__item--current' : ''}`}>
              <div className="timeline__marker" aria-hidden="true" />
              <div className="card timeline__card">
                <header className="timeline__head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="timeline__company">
                      {job.company} · {job.place}
                    </p>
                  </div>
                  <span className={`pill ${job.current ? 'pill--live' : ''}`}>
                    {job.period}
                  </span>
                </header>
                <ul className="timeline__points">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <ul className="chips">
                  {job.tech.map((t) => (
                    <li className="chip" key={t}>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
