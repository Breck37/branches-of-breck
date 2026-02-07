import { motion } from 'framer-motion'

const PARTICLE_COUNT = 18

function generateParticles() {
  return Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
    id: i,
    x: 10 + Math.random() * 80,
    y: 5 + Math.random() * 90,
    size: 2 + Math.random() * 4,
    duration: 4 + Math.random() * 6,
    delay: Math.random() * 4,
    driftX: -15 + Math.random() * 30,
    driftY: -20 + Math.random() * 10,
  }))
}

// Generate once at module level so particles stay stable across re-renders
const particles = generateParticles()

export default function ParticleField() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-bark-light"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            boxShadow: `0 0 ${p.size + 2}px rgba(240, 208, 128, 0.5)`,
          }}
          animate={{
            x: [0, p.driftX, -p.driftX / 2, 0],
            y: [0, p.driftY, p.driftY / 2, 0],
            opacity: [0.2, 0.8, 0.4, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}
    </div>
  )
}
