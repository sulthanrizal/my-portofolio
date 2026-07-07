import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const FROM = {
  up: { x: 0, y: 28 },
  left: { x: -70, y: 0 },
  right: { x: 70, y: 0 },
}

export default function Reveal({ children, delay = 0, direction = 'up', className }) {
  const ref = useRef(null)
  const from = FROM[direction] ?? FROM.up

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end 0.35', 'end 0.02'],
  })
  const exitX = useTransform(scrollYProgress, [0, 1], [0, from.x * 1.6])
  const exitY = useTransform(scrollYProgress, [0, 1], [0, direction === 'up' ? -44 : 0])
  const exitOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: exitX, y: exitY, opacity: exitOpacity }}
    >
      <motion.div
        initial={{ opacity: 0, x: from.x, y: from.y }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay, ease: [0.21, 0.65, 0.28, 0.99] }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
