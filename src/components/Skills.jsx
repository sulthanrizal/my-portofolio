import Reveal from './Reveal'
import { skills, marquee } from '../data'

export default function Skills() {
  const strip = [...marquee, ...marquee]

  return (
    <section className="section" id="skills">
      <Reveal>
        <p className="section__eyebrow">04 — Skills</p>
        <h2 className="section__title">
          My <span className="grad-text">toolbox</span>.
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {strip.map((t, i) => (
              <span className="marquee__item" key={`${t}-${i}`}>
                {t} <em>✦</em>
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="skills__grid">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 0.08}>
            <div className="card skills__card">
              <h3>{s.group}</h3>
              <ul className="chips">
                {s.items.map((item) => (
                  <li className="chip chip--lg" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
