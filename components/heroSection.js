import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <header ref={ref} className="relative z-[1] text-center pt-36 pb-16 px-6">
      <motion.h1
        style={{ y, opacity }}
        className="font-display text-5xl md:text-6xl font-bold text-parchment-light tracking-wide mb-4"
      >
        Branches of Breck
      </motion.h1>
      <motion.p
        style={{ y, opacity }}
        className="text-lg text-bark-dim font-light"
      >
        Explore my personal projects and creations.
      </motion.p>
    </header>
  )
}
