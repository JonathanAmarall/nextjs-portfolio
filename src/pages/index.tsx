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

      {/* Page Contact */}
      <Flex
        dir="column"
        flexDir="column"
        w={'98vw'}
        h="700px"
        justify="center"
        align={'center'}
        className={styles.backgroundImageInverse}
      >
        <Box id="contact" alignItems={'center'}>
          <Title name="Contact" />
        </Box>
        <Flex
          as="form"
          width={'100%'}
          maxW={600}
          flexDir="column"
          bg="gray.800"
          p="8"
          borderRadius={8}
        >
          <FormControl pb={3}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input id="name" type="text" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input id="email" type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea id="message" size="sm" />
          </FormControl>
          <Button type="submit" mt="6" bg="var(--primary)" colorScheme="purple">
            Send Message
          </Button>
        </Flex>
      </Flex>
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
