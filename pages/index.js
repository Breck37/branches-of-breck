import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Branches of Breck</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.titleWrap}>
          <h1 className={styles.title}>
            Welcome to Br<span className="text">a</span>nches of Breck
        </h1>
          {/* <svg>
            <line x1='0' y1='0' x2='250' y2='250' stroke='blue' strokeWidth='4' />
          </svg> */}
        </div>

        <p className={styles.description}>
          Website Coming Soon!
        </p>
        <section>
          <a href="/projects">
            <h3 className={styles.current}>
              View Current Projects
            </h3>
          </a>
        </section>
      </main>


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div >
  )
}
