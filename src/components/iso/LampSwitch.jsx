import { useEffect, useRef } from 'react'
import figureHtml from './lamp-figure.html?raw'
import { useTheme } from '../../ThemeContext'
import './iso.css'
import './lamp.css'

export default function LampSwitch() {
  const wrapperRef = useRef(null)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const root = wrapperRef.current
    if (!root) return
    const stage = root.querySelector('.iso-stage')
    const knob = root.querySelector('[data-part="pull-knob"]')

    const activate = (event) => {
      event.preventDefault()
      toggleTheme()
    }
    const onKeyDown = (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        toggleTheme()
      }
    }

    knob.addEventListener('click', activate)
    stage.addEventListener('keydown', onKeyDown)
    return () => {
      knob.removeEventListener('click', activate)
      stage.removeEventListener('keydown', onKeyDown)
    }
  }, [toggleTheme])

  useEffect(() => {
    const root = wrapperRef.current
    if (!root) return
    const stage = root.querySelector('.iso-stage')
    const readout = root.querySelector('[data-readout]')
    const on = theme === 'light'
    stage.setAttribute('aria-checked', String(on))
    const text = on ? 'light mode · on' : 'dark mode · off'
    if (readout.textContent !== text) readout.textContent = text
  }, [theme])

  return (
    <div
      className="iso iso-wrap lamp-fig"
      data-theme={theme}
      data-on={theme === 'light' ? 'true' : 'false'}
      ref={wrapperRef}
      dangerouslySetInnerHTML={{ __html: figureHtml }}
    />
  )
}
