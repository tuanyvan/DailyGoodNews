import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Navigation from '../components/Navigation'
import Header from '../components/Header'
import NewsForm from '../components/NewsForm'

import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Good News, Everyone</title>
        <meta name="description" content="Good News, Everyone is a news dashboard that brings you the positive side of the world." />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');
        </style>
      </Head>

      <Header />

      <main className={styles.main}>
        <div className="card p-5 w-50 min-h-50">
          <NewsForm />
        </div>
      </main>

      <footer className={styles.footer}>
        <Navigation />
      </footer>
    </div>
  )
}
