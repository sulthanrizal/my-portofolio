import Reveal from './Reveal'
import { profile } from '../data'
import { useLanguage } from '../LanguageContext'
import { GithubIcon } from './Navbar'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer" id="contact">
      <div className="footer__glow" aria-hidden="true" />
      <Reveal>
        <p className="section__eyebrow">{t('footer.eyebrow')}</p>
        <h2 className="footer__title">
          {t('footer.titlePre')}
          <br />
          <span className="grad-text">{t('footer.titleEmph')}</span>
          {t('footer.titlePost')}
        </h2>
        <p className="footer__sub">{t('footer.sub')}</p>
        <div className="footer__actions">
          <a
            className="btn btn--primary"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
            github.com/sulthanrizal
          </a>
          <a
            className="btn btn--ghost"
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('footer.downloadCV')}
          </a>
        </div>
      </Reveal>

      <div className="footer__bar">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>{profile.location}</span>
        <span>{t('footer.builtWith')}</span>
      </div>
    </footer>
  )
}
