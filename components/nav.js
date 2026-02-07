export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-end gap-8 px-12 py-6 bg-gradient-to-b from-cosmic-deep/90 to-transparent">
      <a
        href="/"
        className="text-bark-dim text-sm tracking-wide hover:text-bark-light transition-colors"
      >
        Home
      </a>
      <a
        href="#projects"
        className="text-bark-dim text-sm tracking-wide hover:text-bark-light transition-colors"
      >
        Projects
      </a>
      <a
        href="#contact"
        className="text-bark-dim text-sm tracking-wide hover:text-bark-light transition-colors"
      >
        Contact
      </a>
    </nav>
  )
}
