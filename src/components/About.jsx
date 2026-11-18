import Reveal from './Reveal'
import { profile, education } from '../data'

export default function About() {
  return (
    <section className="section" id="about">
      <Reveal>
        <p className="section__eyebrow">01 — About</p>
        <h2 className="section__title">
          Focused on <span className="grad-text">user experience</span>,
          <br /> obsessed with the details.
        </h2>
      </Reveal>

      <div className="about__grid">
        <Reveal delay={0.1} direction="left">
          <div className="about__text">
            <p>{profile.summary}</p>
            <p>
              I&apos;ve interned across three companies as a frontend and
              fullstack developer, shipped organizational websites used by real
              communities, and I&apos;m always exploring what makes an
              interface feel effortless — from clean component architecture to
              the last easing curve.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2} direction="right">
          <div className="about__edu">
            <h3>Education</h3>
            {education.map((e) => (
              <div className="edu-card" key={e.school}>
                <div>
                  <strong>{e.school}</strong>
                  <p>{e.degree}</p>
                </div>
                <div className="edu-card__meta">
                  <span>{e.period}</span>
                  <span>{e.place}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
