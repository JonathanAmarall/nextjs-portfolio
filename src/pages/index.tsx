import Head from 'next/head';
import { Header } from '../componentes/Header';
import styles from '../styles/home.module.scss';

import {
  Box,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { Title } from '../componentes/Title';
import CarouselSlide from '../componentes/CarouselSlide';
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
