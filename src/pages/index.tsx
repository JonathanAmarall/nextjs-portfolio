import Head from 'next/head';
import { Header } from '../componentes/Header';
import ScrollToTop from 'react-scroll-to-top';
import { About } from '../componentes/About';
import { Contact } from '../componentes/Contact';
import { Projects } from '../componentes/Projects';
import { Skills } from '../componentes/Skills';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jon</title>
      </Head>
      <Header />
      <ScrollToTop smooth color="purple" />
      <About />
      <Skills />
      <Contact />
      <Projects />
    </>
  );
}
