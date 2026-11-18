import Reveal from './Reveal'
import { profile, education } from '../data'
import { useLanguage } from '../LanguageContext'

export default function About() {
  const { lang, t } = useLanguage()

  return (
    <section className="section" id="about">
      <Reveal>
        <p className="section__eyebrow">{t('about.eyebrow')}</p>
        <h2 className="section__title">
          {t('about.titlePre')} <span className="grad-text">{t('about.titleEmph')}</span>
          {t('about.titlePost')}
        </h2>
      </Reveal>

      <div className="about__grid">
        <Reveal delay={0.1} direction="left">
          <div className="about__text">
            <p>{profile.summary[lang]}</p>
            <p>{t('about.extraParagraph')}</p>
          </div>
        </Reveal>

        <Reveal delay={0.2} direction="right">
          <div className="about__edu">
            <h3>{t('about.educationHeading')}</h3>
            {education.map((e) => (
              <div className="edu-card" key={e.school}>
                <div>
                  <strong>{e.school}</strong>
                  <p>{e.degree[lang]}</p>
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
