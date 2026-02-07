import Head from 'next/head'
import { motion } from 'framer-motion'
import { projectsData } from './api/projects'
import styles from '../styles/Home.module.css'
import Nav from '../components/nav'
import HeroSection from '../components/heroSection'
import TreeTrunk from '../components/treeTrunk'
import OrganicBranch from '../components/organicBranch'
import ProjectCard from '../components/projectCard'
import ParticleField from '../components/particleField'
import Footer from '../components/footer'

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

export default function Home() {
  return (
    <div className={`${styles.page} min-h-screen bg-gradient-to-b from-cosmic-deep via-cosmic-mid to-cosmic-light text-parchment font-body overflow-x-hidden relative`}>
      <Head>
        <title>Branches of Breck</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Nav />
      <HeroSection />

      <main id="projects" className="relative z-[1] max-w-[900px] mx-auto px-6 pt-10 pb-20">
        <TreeTrunk />
        <ParticleField />

        <motion.div
          className="relative z-[1] flex flex-col gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectsData.map((project, index) => {
            const isLeft = index % 2 === 0
            return (
              <div
                key={project.key}
                className={`relative flex items-center w-full md:w-1/2 ${
                  isLeft
                    ? 'md:self-start md:justify-end md:pr-10'
                    : 'md:self-end md:justify-start md:pl-10'
                } justify-center`}
              >
                <OrganicBranch isLeft={isLeft} index={index} />
                <ProjectCard project={project} isLeft={isLeft} />
              </div>
            )
          })}
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
