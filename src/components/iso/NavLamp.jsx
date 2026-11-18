import { useEffect, useRef } from 'react'
import svgMarkup from './nav-lamp.html?raw'
import { useTheme } from '../../ThemeContext'
import './iso.css'
import './lamp.css'

const CHAIN_FROM = [72.26, 38.62]
const KNOB_REST = [92.53, 88.93]
const MAX_PULL = 16.39
const DRAG_PX_FOR_FULL_PULL = 26
const PULL_THRESHOLD = 0.5
const JITTER_PX = 3

export default function NavLamp() {
  const wrapperRef = useRef(null)
  const dragRef = useRef(null)
  const draggedGestureRef = useRef(false)
  const rafRef = useRef(0)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const root = wrapperRef.current
    if (!root) return
    const knob = root.querySelector('[data-part="pull-knob"]')
    const chain = root.querySelector('[data-part="pull-chain-line"]')
    if (!knob || !chain) return

    const apply = (dy) => {
      knob.setAttribute('transform', `translate(0, ${dy.toFixed(2)})`)
      chain.setAttribute(
        'd',
        `M ${CHAIN_FROM[0]},${CHAIN_FROM[1]} L ${KNOB_REST[0]},${(KNOB_REST[1] + dy).toFixed(2)}`,
      )
    }

    const animateBack = (from) => {
      cancelAnimationFrame(rafRef.current)
      const start = performance.now()
      const duration = 260
      const step = (now) => {
        const t = Math.min(1, (now - start) / duration)
        const eased = 1 - (1 - t) ** 3
        apply(from * (1 - eased))
        if (t < 1) rafRef.current = requestAnimationFrame(step)
      }
      rafRef.current = requestAnimationFrame(step)
    }

    const onPointerDown = (event) => {
      event.preventDefault()
      knob.setPointerCapture(event.pointerId)
      cancelAnimationFrame(rafRef.current)
      dragRef.current = { startY: event.clientY, dy: 0, dragged: false }
    }

    const onPointerMove = (event) => {
      const st = dragRef.current
      if (!st) return
      const movedPx = event.clientY - st.startY
      if (Math.abs(movedPx) > JITTER_PX) st.dragged = true
      const progress = Math.min(1, Math.max(0, movedPx / DRAG_PX_FOR_FULL_PULL))
      st.dy = progress * MAX_PULL
      apply(st.dy)
    }

    const onPointerUp = (event) => {
      const st = dragRef.current
      if (!st) return
      try {
        knob.releasePointerCapture(event.pointerId)
      } catch {
        /* already released */
      }
      const pulledEnough = st.dy / MAX_PULL >= PULL_THRESHOLD
      const wasDragged = st.dragged
      dragRef.current = null
      animateBack(st.dy)
      if (wasDragged) {
        draggedGestureRef.current = true
        if (pulledEnough) toggleTheme()
      }
    }

    knob.addEventListener('pointerdown', onPointerDown)
    knob.addEventListener('pointermove', onPointerMove)
    knob.addEventListener('pointerup', onPointerUp)
    knob.addEventListener('pointercancel', onPointerUp)

    return () => {
      knob.removeEventListener('pointerdown', onPointerDown)
      knob.removeEventListener('pointermove', onPointerMove)
      knob.removeEventListener('pointerup', onPointerUp)
      knob.removeEventListener('pointercancel', onPointerUp)
      cancelAnimationFrame(rafRef.current)
    }
  }, [toggleTheme])

  const onClick = () => {
    if (draggedGestureRef.current) {
      draggedGestureRef.current = false
      return
    }
    toggleTheme()
  }

  const on = theme === 'light'

  return (
    <button
      type="button"
      className="iso nav-lamp"
      data-theme={theme}
      data-on={on ? 'true' : 'false'}
      aria-pressed={on}
      aria-label={on ? 'Switch to dark mode' : 'Switch to light mode'}
      onClick={onClick}
      ref={wrapperRef}
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
    />
  )
}
