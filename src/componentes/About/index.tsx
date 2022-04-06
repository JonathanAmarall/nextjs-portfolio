import {
  Box,
  Flex,
  Link,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { Button as AboutButton } from './Button';
import { Modal } from './modal';

export function About() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        width={'100%'}
        h={'100vh'}
        direction={{ base: 'column', md: 'row-reverse' }}
      >
        <Flex width={'100%'} justifyContent={'center'}>
          <Box m="5rem 0" minW="320px" textAlign={'right'}>
            <Text
              fontSize={['3xl', '5xl']}
              pb={['0.2rem', '1rem']}
              fontWeight={'bold'}
            >
              Jonathan Amaral
            </Text>
            <Text fontSize={'2xl'} pb={'1rem'}>
              Web Developer
            </Text>
            <AboutButton onClick={onOpen} title={'About Me'} />
          </Box>
          <Modal isOpen={isOpen} onClose={onClose} />
        </Flex>
        <Flex
          direction={{ base: 'row', md: 'column' }}
          justifyContent={'center'}
          m={['0 0 0 1rem']}
        >
          <Link
            pb={'1rem'}
            m={['1rem', '1rem', '0']}
            target="_blank"
            href="https://www.linkedin.com/in/jonathan-luis-cequim-do-amaral-532a42185/"
          >
            <BsLinkedin size={'3rem'} color={'#827f7f'} />
          </Link>
          <Link
            m={['1rem', '1rem', '0']}
            pb={'1rem'}
            target="_blank"
            href="https://github.com/JonathanAmarall"
          >
            <BsGithub size={'3rem'} color={'#827f7f'} />
          </Link>
          <Link
            m={['1rem', '1rem', '0']}
            pb={'1rem'}
            target="_blank"
            href="https://www.instagram.com/developer.jon/"
          >
            <BsInstagram size={'3rem'} color={'#827f7f'} />
          </Link>
        </Flex>
      </Flex>
    </>
  );
}
