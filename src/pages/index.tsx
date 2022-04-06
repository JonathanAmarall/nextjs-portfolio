import Head from 'next/head';
import { Header } from '../componentes/Header';

import { useDisclosure } from '@chakra-ui/react';
import ScrollToTop from 'react-scroll-to-top';
import { About } from '../componentes/About';
import { Contact } from '../componentes/Contact';
import { Projects } from '../componentes/Projects';
import { Skills } from '../componentes/Skills';

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
