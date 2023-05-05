import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

import Header from '@/components/header';
import Footer from '@/components/footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      <main className={poppins.className}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}