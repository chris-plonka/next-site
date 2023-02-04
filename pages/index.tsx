import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Krzysztof Płonka
        </h1>

        <p className={styles.description}>
          I'm passionate of new technology!
          
        </p>

        <div className={styles.grid}>
		
	<Link href="/story">	
          <a className={styles.card}>
            <h2>My Story &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
	</Link>
          <Link href="/skills">
	  <a className={styles.card}>
            <h2>Skills &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
	  </Link>
          <Link href="/projects">
          <a className={styles.card}>
            <h2>Projects &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
	  </Link>
          <Link href="/resume">  
           <a className={styles.card}>
            <h2>Resume &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
	 </Link>
        </div>

        <button className="bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
           <a href="mailto:info@krzysztofplonka.pl">info@krzysztofplonka.pl</a>
        </button>
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
