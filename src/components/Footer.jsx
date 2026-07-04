import Reveal from './Reveal'
import { profile } from '../data'
import { GithubIcon } from './Navbar'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__glow" aria-hidden="true" />
      <Reveal>
        <p className="section__eyebrow">05 — Contact</p>
        <h2 className="footer__title">
          Let&apos;s build something
          <br />
          <span className="grad-text">together</span>.
        </h2>
        <p className="footer__sub">
          Open for internship & freelance opportunities — or just say hi.
        </p>
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
            Download CV
          </a>
        </div>
      </Reveal>

      <div className="footer__bar">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>{profile.location}</span>
        <span>Built with React, Three.js & ☕</span>
      </div>
    </footer>
  )
}
