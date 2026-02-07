import Head from 'next/head'
import { projectsData } from './api/projects'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Branches of Breck</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <nav className={styles.nav}>
        <a href="/">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <header className={styles.hero}>
        <h1 className={styles.heroTitle}>Branches of Breck</h1>
        <p className={styles.heroSubtitle}>Explore my personal projects and creations.</p>
      </header>

      <main id="projects" className={styles.treeSection}>
        {/* Central tree trunk */}
        <div className={styles.treeTrunk} />

        {/* Glowing particles */}
        <div className={styles.particles}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className={styles.particle}
              style={{
                '--delay': `${i * 0.8}s`,
                '--x': `${20 + Math.random() * 60}%`,
                '--y': `${10 + Math.random() * 80}%`,
              }}
            />
          ))}
        </div>

        <div className={styles.projectRows}>
          {projectsData.map((project, index) => {
            const isLeft = index % 2 === 0
            return (
              <div
                key={project.key}
                className={`${styles.projectRow} ${isLeft ? styles.rowLeft : styles.rowRight}`}
              >
                {/* Branch line connecting to trunk */}
                <div className={styles.branch} />

                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectCard}
                >
                  <div className={styles.cardImage}>
                    {project.image ? (
                      <img src={project.image} alt={project.alt} />
                    ) : (
                      <div
                        className={styles.cardPlaceholder}
                        style={{ backgroundColor: project.placeholderColor || '#555' }}
                      >
                        <span>{project.name.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <div className={styles.cardInfo}>
                    <h3>{project.name}</h3>
                    <p>{project.tagline}</p>
                  </div>
                  <div className={styles.cardArrow}>&#8250;</div>
                </a>
              </div>
            )
          })}
        </div>
      </main>

      <footer id="contact" className={styles.siteFooter}>
        <div className={styles.footerLinks}>
          <a href="https://github.com/Breck37" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span className={styles.footerDivider}>|</span>
          <a href="https://linkedin.com/in/brenteckert" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  )
}
