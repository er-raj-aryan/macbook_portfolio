import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css';
import MacPortfolio from '../MacPortfolio/MacPortfolio'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Er Raj Aryan</title>
        <meta name="description" content="Portfolio or Er Raj Aryan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <MacPortfolio />
      </main>
    </>
  )
}
