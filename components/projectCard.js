import { motion } from 'framer-motion'

const cardVariants = {
  hidden: (isLeft) => ({
    opacity: 0,
    x: isLeft ? -60 : 60,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 18,
    },
  },
}

export default function ProjectCard({ project, isLeft }) {
  return (
    <motion.a
      href={project.website}
      target="_blank"
      rel="noopener noreferrer"
      custom={isLeft}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        y: -6,
        boxShadow: '0 8px 30px rgba(200, 170, 100, 0.25)',
      }}
      className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-md no-underline text-inherit w-full max-w-[360px] transition-colors hover:bg-white/10 hover:border-bark/40"
    >
      {/* Image / Placeholder */}
      <div className="shrink-0 w-20 h-[60px] rounded-lg overflow-hidden bg-black/20">
        {project.image ? (
          <img
            src={project.image}
            alt={project.alt}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center rounded-lg"
            style={{ backgroundColor: project.placeholderColor || '#555' }}
          >
            <span className="text-2xl font-bold text-white/80">
              {project.name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="m-0 mb-1 text-base font-semibold text-parchment-light">
          {project.name}
        </h3>
        <p className="m-0 text-xs text-bark-dim leading-relaxed">
          {project.tagline}
        </p>
      </div>

      {/* Arrow */}
      <span className="shrink-0 text-2xl text-bark transition-transform group-hover:translate-x-1">
        &#8250;
      </span>
    </motion.a>
  )
}
