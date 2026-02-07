import { motion } from 'framer-motion'

export default function OrganicBranch({ isLeft, index }) {
  // Bezier control points differ per side for organic feel
  const path = isLeft
    ? 'M120,25 C90,22 50,30 0,25'
    : 'M0,25 C30,22 70,30 120,25'

  return (
    <motion.div
      className="absolute top-1/2 -translate-y-1/2 w-[120px] h-[50px] hidden md:block pointer-events-none"
      style={isLeft ? { right: -8 } : { left: -8 }}
      animate={{ rotate: [0, 1.5, 0, -1, 0] }}
      transition={{
        duration: 4 + index * 0.5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: index * 0.3,
      }}
    >
      <svg
        viewBox="0 0 120 50"
        fill="none"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id={`branch-grad-${index}`}
            x1={isLeft ? '100%' : '0%'}
            y1="0"
            x2={isLeft ? '0%' : '100%'}
            y2="0"
          >
            <stop offset="0%" stopColor="#c8aa64" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#c8aa64" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <path
          d={path}
          stroke={`url(#branch-grad-${index})`}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </motion.div>
  )
}
