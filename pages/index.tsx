import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { About } from "../sections/About";
import { Contact } from "../sections/Contact";
import { Experience } from "../sections/Experience";
import { Footer } from "../sections/Footer";
import { Home } from "../sections/Home";
import { Navigation } from "../sections/Navigation";
import { Work } from "../sections/Work";

const Page: NextPage = () => {
  const mainRef = React.useRef<null | HTMLElement>(null);

  return (
    <>
      <Head>
        <title>Tiger Abrodis Personal Portfolio</title>
        <meta
          name="description"
          content="More about Tiger Abrodi. His experience, about him, getting in touch with him and some of his work."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation mainRef={mainRef} />
      <main id="main" ref={mainRef} tabIndex={-1}>
        <Home />
        <About />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Page;
