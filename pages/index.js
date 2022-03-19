import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navigation from '../components/Navigation'
import Header from '../components/Header'

import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Good News, Everyone</title>
        <meta name="description" content="Good News, Everyone is a news dashboard that brings you the positive side of the world." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        
      </main>

      <footer className={styles.footer}>
        <Navigation />
      </footer>
    </div>
  )
}
