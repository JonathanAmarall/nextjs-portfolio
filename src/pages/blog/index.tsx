import {
  Box,
  Flex,
  HStack,
  Text,
  Link,
  Input,
  InputRightElement,
  InputGroup,
  Button,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BsSearch } from 'react-icons/bs';
import { Logo } from '../../componentes/Logo/Logo';
import { SignInButton } from '../../componentes/SignInButton';

export default function Blog() {
  const router = useRouter();

  return (
    <>
      <Flex justifyContent={'space-between'} m={5}>
        <Box>
          <Logo />
        </Box>
        <Box>
          {/* <Box>
          <InputGroup>
            <Input placeholder="Search" size="sm" />
            <InputRightElement children={<BsSearch color="green.600" />} />
          </InputGroup>
        </Box> */}
          <Box>
            <HStack as="nav" pr={8}>
              <Link onClick={() => router.push('/')}>Home</Link>
              <SignInButton />
            </HStack>
          </Box>
        </Box>
      </Flex>
      <Flex justifyContent="center">
        <Flex flexDir={'column'}>
          <Box
            mb={10}
            maxW={800}
            w={'100%'}
            height={140}
            border="1px solid var(--gray-600)"
          >
            <Text>19 de março de 2022</Text>
            <Text>Criando API com NestJS</Text>
            <Text>
              O NestJS é um framework back-end que auxilia o desenvolvimento de
              aplicações eficientes. escaláveis e confiáveis em cima do Node.js.
              O NestJS utiliza como ...
            </Text>
          </Box>
          <Box
            mb={10}
            maxW={800}
            w={'100%'}
            height={140}
            border="1px solid var(--gray-600)"
          >
            <Text>19 de março de 2022</Text>
            <Text>Criando API com NestJS</Text>
            <Text>
              O NestJS é um framework back-end que auxilia o desenvolvimento de
              aplicações eficientes. escaláveis e confiáveis em cima do Node.js.
              O NestJS utiliza como ...
            </Text>
          </Box>
          <Box
            mb={10}
            maxW={800}
            w={'100%'}
            height={140}
            border="1px solid var(--gray-600)"
          >
            <Text>19 de março de 2022</Text>
            <Text>Criando API com NestJS</Text>
            <Text>
              O NestJS é um framework back-end que auxilia o desenvolvimento de
              aplicações eficientes. escaláveis e confiáveis em cima do Node.js.
              O NestJS utiliza como ...
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
