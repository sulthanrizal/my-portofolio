import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      className="modal__backdrop"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        className="modal"
        style={{ '--hue': project.hue }}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 42, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.4, ease: [0.21, 0.65, 0.28, 0.99] }}
      >
        <button className="modal__close" onClick={onClose} aria-label="Close detail">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="m4 4 8 8M12 4l-8 8"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className="modal__media">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="modal__body">
          <p className="project__context">{project.context}</p>
          <h3 className="modal__title">{project.title}</h3>
          <p className="modal__desc">{project.description}</p>
          <ul className="chips">
            {project.tech.map((t) => (
              <li className="chip" key={t}>
                {t}
              </li>
            ))}
          </ul>
          <div className="modal__actions">
            {project.links.length > 0 ? (
              project.links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  {l.label} <ArrowIcon />
                </a>
              ))
            ) : (
              <span className="pill pill--muted">{project.badge}</span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

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
          <Reveal
            key={p.title}
            delay={(i % 3) * 0.1}
            direction={['left', 'up', 'right'][i % 3]}
          >
            <article
              className="card project"
              style={{ '--hue': p.hue }}
              role="button"
              tabIndex={0}
              onClick={() => setSelected(p)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setSelected(p)
                }
              }}
            >
              <div className="project__thumb" aria-hidden="true">
                <span className="project__index">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <img
                  className="project__img"
                  src={p.image}
                  alt=""
                  loading="lazy"
                />
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
                        onClick={(e) => e.stopPropagation()}
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

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
