import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data'
import { useLanguage } from '../LanguageContext'
import { GithubIcon } from './Navbar'

const Scene3D = lazy(() => import('./Scene3D'))

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.65, 0.28, 0.99] },
  },
}

export default function Hero() {
  const { lang, t } = useLanguage()

  return (
    <section className="hero" id="top">
      <div className="hero__scene">
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </div>
      <div className="hero__glow hero__glow--violet" aria-hidden="true" />
      <div className="hero__glow hero__glow--cyan" aria-hidden="true" />

      <motion.div
        className="hero__content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p className="hero__eyebrow" variants={item}>
          <span className="hero__status" /> {profile.role[lang]} · {profile.location}
        </motion.p>

        <motion.h1 className="hero__title" variants={item}>
          {t('hero.greetingPre')} <span className="grad-text">{profile.name}</span>.
          <br />
          {profile.tagline[lang]}
        </motion.h1>

        <motion.p className="hero__sub" variants={item}>
          {profile.summary[lang]}
        </motion.p>

        <motion.div className="hero__actions" variants={item}>
          <a className="btn btn--primary" href="#projects">
            {t('hero.viewProjects')}
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 3v10M3.5 8.5 8 13l4.5-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            className="btn btn--ghost"
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('hero.downloadCV')}
          </a>
          <a
            className="btn btn--icon"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
        </motion.div>

        <motion.ul className="hero__stats" variants={item}>
          <li>
            <strong>4</strong>
            <span>{t('hero.statWorkExp')}</span>
          </li>
          <li>
            <strong>6+</strong>
            <span>{t('hero.statProjectsShipped')}</span>
          </li>
          <li>
            <strong>CS</strong>
            <span>@ Universitas Cakrawala</span>
          </li>
        </motion.ul>
      </motion.div>

      <a href="#about" className="hero__scroll" aria-label={t('hero.scrollAria')}>
        <span />
      </a>
    </section>
  )
}
