import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'


export default function Home() {
  // Code javascript

// Stockage des valeurs dans la constante "thes"
const [listeThes, setThes] = useState([]);

useEffect(() => {
    (
        async () => {
            try {
                const response = await fetch('http://localhost:3000');
                const res = await response.json();
                setThes(res);
            } catch (e) {
                setThes(e.message);
            }
        }
    )();
}, []);


// console.log(listeThes);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenue sur le site nextThé
        </h1>
        { listeThes && listeThes.map((the, index) => {
        return (
      <ul key={index}>
        <li>{the.nom}</li>
      </ul>
    )
  })}

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
