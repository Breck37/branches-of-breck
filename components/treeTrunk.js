export default function TreeTrunk() {
  return (
    <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-8 hidden md:block pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 32 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Bark texture filter */}
          <filter id="bark-texture" x="0" y="0" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.04 0.15"
              numOctaves="4"
              seed="3"
              result="noise"
            />
            <feDiffuseLighting
              in="noise"
              lightingColor="#c8aa64"
              surfaceScale="1.5"
              result="lit"
            >
              <feDistantLight azimuth="45" elevation="55" />
            </feDiffuseLighting>
            <feComposite in="lit" in2="SourceGraphic" operator="in" />
          </filter>
          {/* Glow gradient */}
          <linearGradient id="trunk-glow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c8aa64" stopOpacity="0.05" />
            <stop offset="15%" stopColor="#c8aa64" stopOpacity="0.4" />
            <stop offset="85%" stopColor="#c8aa64" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#c8aa64" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Organic wavy trunk path */}
        <path
          d="M16 0 C14 80, 18 160, 15 240 C12 320, 19 400, 16 480 C13 560, 18 640, 15 720 C12 800, 17 880, 16 1000"
          stroke="url(#trunk-glow)"
          strokeWidth="6"
          fill="none"
          filter="url(#bark-texture)"
        />
        {/* Golden glow overlay */}
        <path
          d="M16 0 C14 80, 18 160, 15 240 C12 320, 19 400, 16 480 C13 560, 18 640, 15 720 C12 800, 17 880, 16 1000"
          stroke="#c8aa64"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
          style={{ filter: 'blur(4px)' }}
        />
      </svg>
    </div>
  )
}
