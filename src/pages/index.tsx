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

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Head>
        <title>Jon</title>
      </Head>
      <Header />
      <ScrollToTop smooth color="var(--primary)" />
      <About />
      {/* Page Skills */}

      <Contact />
      {/* Page Projects */}
      <Flex
        id="projects"
        dir="column"
        flexDir="column"
        w={'98vw'}
        h="100vh"
        justify="center"
        align={'center'}
      >
        <Box alignItems={'center'}>
          <Title name="Projects" />
        </Box>
        <Box maxW={750} alignItems={'center'}>
          <CarouselSlide />
        </Box>
      </Flex>
      {/* Page Blog */}
    </>
  );
}
