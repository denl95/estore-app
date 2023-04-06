import Head from 'next/head'
import { Inter } from 'next/font/google'
import { SearchPage } from '@/components/SearchPage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Estore App</title>
        <meta name="description" content="Estore App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchPage />
    </>
  )
}
