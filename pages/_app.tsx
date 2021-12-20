import * as React from 'react'
import type { AppProps } from 'next/app'
import '../theme/fonts.css'
import '../theme/globalStyles.css'

function MyApp({ Component, pageProps }: AppProps) {
  /* Calculate height for mobile */
  React.useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [])

  return <Component {...pageProps} />
}
export default MyApp
