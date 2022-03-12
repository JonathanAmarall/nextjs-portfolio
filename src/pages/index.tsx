import Head from 'next/head';
import { Button } from '../componentes/Button';
import { Header } from '../componentes/Header';
import styles from '../styles/home.module.scss';

import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Head>
        <title>Jon</title>
      </Head>
      <Header />
      <div className={styles.backgroundImage}>
        <div className={styles.authorContainer}>
          <div>
            <h1>Jonathan Amaral</h1>
            <h2>Web Developer</h2>
            <Button onClick={onOpen} title={'About Me'} />
            <Modal
              isCentered
              isOpen={isOpen}
              onClose={onClose}
              colorScheme="cyan"
            >
              <ModalContent>
                <ModalCloseButton />
                <ModalBody
                  display={'flex'}
                  flexDir="column"
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <Text fontSize="4xl">Hello!</Text>
                  <Text fontSize="4xl">I'm Jonathan Amaral.</Text>
                  <Text fontSize="4xl">Web developer from Brazil.</Text>
                </ModalBody>
              </ModalContent>
            </Modal>
          </div>
        </div>
        <div className={styles.socialMidiaContainer}>
          <a href="#">
            <BsLinkedin size={'3rem'} color="#1C1D25" />
          </a>
          <a href="#">
            <BsGithub size={'3rem'} color="#1C1D25" />
          </a>
          <a href="#">
            <BsInstagram size={'3rem'} color="#1C1D25" />
          </a>
        </div>
      </div>
    </>
  );
}
