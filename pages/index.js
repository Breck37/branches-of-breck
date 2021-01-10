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
        <h1 className={styles.title}>
          Welcome to Branches of Breck
        </h1>

        <p className={styles.description}>
          Coming Soon!
        </p>
        <section>
          <h3 className={styles.current}>
            Current Projects
          </h3>
          <div className={styles.links}>
            <a rel="stylesheet" href="https://breckulator.com">Breckulator</a>
          </div>
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
    </div>
  )
}
