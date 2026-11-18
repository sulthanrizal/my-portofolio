import Reveal from './Reveal'
import { skills, marquee } from '../data'
import { useLanguage } from '../LanguageContext'

export default function Skills() {
  const strip = [...marquee, ...marquee]
  const { t } = useLanguage()

  return (
    <section className="section" id="skills">
      <Reveal>
        <p className="section__eyebrow">{t('skills.eyebrow')}</p>
        <h2 className="section__title">
          {t('skills.titlePre')} <span className="grad-text">{t('skills.titleEmph')}</span>
          {t('skills.titlePost')}
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
          <Reveal
            key={s.group}
            delay={i * 0.08}
            direction={i % 2 === 0 ? 'left' : 'right'}
          >
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
