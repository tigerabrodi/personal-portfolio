import * as React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { About } from '../sections/About'
import { Contact } from '../sections/Contact'
import { Experience } from '../sections/Experience'
import { Footer } from '../sections/Footer'
import { Home } from '../sections/Home'
import { Navigation } from '../sections/Navigation'
import { Projects } from '../sections/Projects'

const title = "Tiger Abrodi's Portfolio"
const description =
  "Tiger Abrodi's work, story, and contact information. Naruto's Sage Mode is on, because I'm his student!"

const Page: NextPage = () => {
  const mainRef = React.useRef<null | HTMLElement>(null)

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@TAbrodi" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://www.tigerabrodi.tech/assets/avatar.jpeg"
        />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://www.tigerabrodi.tech/assets/avatar.jpeg"
        />
      </Head>
      <Navigation mainRef={mainRef} />
      <main id="main" ref={mainRef} tabIndex={-1}>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Page
