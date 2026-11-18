import { useEffect, useRef } from 'react'
import { useTheme } from '../ThemeContext'
import './HangingLamp.css'

const MOUNT = [60, 8]
const CAP_TOP_REST = 128
const BULB_CY_REST = 168
const DRAG_PX_FOR_FULL_PULL = 60
const MAX_PULL = 56
const PULL_THRESHOLD = 0.45
const JITTER_PX = 3

export default function HangingLamp() {
  const wrapperRef = useRef(null)
  const dragRef = useRef(null)
  const draggedGestureRef = useRef(false)
  const rafRef = useRef(0)
  const { theme, toggleTheme } = useTheme()
  const on = theme === 'light'

  useEffect(() => {
    const root = wrapperRef.current
    if (!root) return
    const group = root.querySelector('[data-part="bulb-group"]')
    const cord = root.querySelector('[data-part="cord-line"]')
    const hit = root.querySelector('[data-part="bulb-hit"]')
    if (!group || !cord || !hit) return

    const apply = (dy) => {
      group.setAttribute('transform', `translate(0, ${dy.toFixed(2)})`)
      cord.setAttribute('d', `M ${MOUNT[0]},${MOUNT[1]} L ${MOUNT[0]},${(CAP_TOP_REST + dy).toFixed(2)}`)
    }

    const animateBack = (from) => {
      cancelAnimationFrame(rafRef.current)
      const start = performance.now()
      const duration = 420
      const step = (now) => {
        const t = Math.min(1, (now - start) / duration)
        // slight overshoot for a springy snap-back
        const eased = t < 1 ? 1 - Math.pow(1 - t, 2.4) * Math.cos(t * 4.2) * 0.12 - Math.pow(1 - t, 3) : 1
        apply(from * (1 - eased))
        if (t < 1) rafRef.current = requestAnimationFrame(step)
        else apply(0)
      }
      rafRef.current = requestAnimationFrame(step)
    }

    const onPointerDown = (event) => {
      event.preventDefault()
      hit.setPointerCapture(event.pointerId)
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
        hit.releasePointerCapture(event.pointerId)
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

    hit.addEventListener('pointerdown', onPointerDown)
    hit.addEventListener('pointermove', onPointerMove)
    hit.addEventListener('pointerup', onPointerUp)
    hit.addEventListener('pointercancel', onPointerUp)

    return () => {
      hit.removeEventListener('pointerdown', onPointerDown)
      hit.removeEventListener('pointermove', onPointerMove)
      hit.removeEventListener('pointerup', onPointerUp)
      hit.removeEventListener('pointercancel', onPointerUp)
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

  return (
    <div className="hanging-lamp" data-on={on ? 'true' : 'false'} ref={wrapperRef}>
      <svg
        className="hanging-lamp-svg"
        viewBox="0 0 120 260"
        role="switch"
        aria-checked={on}
        aria-label={on ? 'Switch to dark mode' : 'Switch to light mode'}
        tabIndex={0}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            toggleTheme()
          }
        }}
      >
        <rect className="lamp-mount" x="52" y="0" width="16" height="8" rx="3" />
        <path data-part="cord-line" className="lamp-cord" d={`M ${MOUNT[0]},${MOUNT[1]} L ${MOUNT[0]},${CAP_TOP_REST}`} />
        <g data-part="bulb-group">
          <circle data-part="bulb-glow" className="lamp-glow" cx="60" cy={BULB_CY_REST} r="50" />
          <rect className="lamp-cap" x="49" y={CAP_TOP_REST} width="22" height="14" rx="3" />
          <line className="lamp-cap-ridge" x1="52" y1={CAP_TOP_REST + 6} x2="68" y2={CAP_TOP_REST + 6} />
          <line className="lamp-cap-ridge" x1="52" y1={CAP_TOP_REST + 10} x2="68" y2={CAP_TOP_REST + 10} />
          <circle data-part="bulb-globe" className="lamp-globe" cx="60" cy={BULB_CY_REST} r="26" />
          <path className="lamp-filament" d={`M 50,${BULB_CY_REST - 4} Q 60,${BULB_CY_REST + 4} 70,${BULB_CY_REST - 4}`} />
          <circle className="lamp-button-ring" cx="60" cy={BULB_CY_REST} r="8" />
          <circle className="lamp-button-dot" cx="60" cy={BULB_CY_REST} r="5" />
          <circle data-part="bulb-hit" cx="60" cy={BULB_CY_REST} r="34" fill="transparent" />
        </g>
      </svg>
    </div>
  )
}
