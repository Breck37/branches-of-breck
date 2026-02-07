export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative z-[1] py-10 px-6 text-center border-t border-white/[0.08]"
    >
      <div className="flex justify-center items-center gap-4">
        <a
          href="https://github.com/Breck37"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bark-dim text-sm hover:text-bark-light transition-colors"
        >
          GitHub
        </a>
        <span className="text-white/15">|</span>
        <a
          href="https://linkedin.com/in/brenteckert"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bark-dim text-sm hover:text-bark-light transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
