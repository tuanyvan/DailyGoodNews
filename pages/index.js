import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Good News, Everyone</title>
        <meta name="description" content="Good News, Everyone is a news dashboard that brings you the positive side of the world." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
          <Navbar className="px-4 py-3" collapseOnSelect expand="lg">
            <Navbar.Brand href="#home">
              Good News, Everyone
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link>Home</Nav.Link>
                <Nav.Link>About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      </header>

      <main className={styles.main}>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
