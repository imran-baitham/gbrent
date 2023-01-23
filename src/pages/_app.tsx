import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { Footer, Header, Subscribe } from '@/components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Hydrated>
      <ThemeProvider attribute="class">
        <Header />
        <Component {...pageProps} />
        <Subscribe />
        <Footer />
      </ThemeProvider>
    </Hydrated>
  )
}

const Hydrated = ({ children }: { children?: any }) => {
  const [hydration, setHydration] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHydration(true)
    }
  }, [])
  return hydration ? children : <div></div>
}
