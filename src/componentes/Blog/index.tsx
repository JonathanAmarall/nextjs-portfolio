import {
  Box,
  Flex,
  HStack,
  Link,
  InputGroup,
  Input,
  InputRightElement,
  useBreakpointValue,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { RiMenuLine } from 'react-icons/ri';
import { Logo } from '../Header/Logo/Logo';
import { SignInButton } from '../../componentes/SignInButton';
import { IBlogPost, Post } from './post';

export function Blog() {
  const [posts, setPosts] = useState<IBlogPost[]>([
    {
      id: 'um',
      shortDate: '19 de março de 2022',
      title: 'Criando API com NestJS',
      preview:
        'O NestJS é um framework back-end que auxilia o desenvolvimento       de aplicações eficientes. escaláveis e confiáveis em cima do Node.js. O NestJS utiliza como ...',
    },
    {
      id: 'dois',
      shortDate: '19 de março de 2022',
      title: 'Criando API com NestJS',
      preview:
        'O NestJS é um framework back-end que auxilia o desenvolvimento       de aplicações eficientes. escaláveis e confiáveis em cima do Node.js. O NestJS utiliza como ...',
    },
    {
      id: 'tres',
      shortDate: '19 de março de 2022',
      title: 'Criando API com NestJS',
      preview:
        'O NestJS é um framework back-end que auxilia o desenvolvimento       de aplicações eficientes. escaláveis e confiáveis em cima do Node.js. O NestJS utiliza como ...',
    },
  ]);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  const router = useRouter();

  return (
    <>
      <Flex justifyContent={'space-between'} m={[2, 5]}>
        <Box>
          <Logo />
        </Box>
        <Box mt={2} w={[150, 250]}>
          <InputGroup>
            <Input
              textAlign={'center'}
              placeholder="Search"
              size="sm"
              _focus={{
                borderColor: 'purple',
              }}
              variant={'flushed'}
            />
            <InputRightElement children={<BsSearch color="green.600" />} />
          </InputGroup>
        </Box>
        <Flex alignItems={'center'}>
          {isWideVersion ? (
            <Box>
              <HStack as="nav" pr={8}>
                <Link
                  pr={8}
                  _hover={{
                    textDecor: 'underline solid purple 0.3rem',
                  }}
                  onClick={() => router.push('/')}
                >
                  Home
                </Link>
                <SignInButton />
              </HStack>
            </Box>
          ) : (
            <Box>
              <Menu>
                <MenuButton
                  _hover={{
                    color: 'white',
                    bg: 'purple',
                  }}
                  as={IconButton}
                  aria-label="Options"
                  icon={<RiMenuLine size={30} />}
                  variant="outline"
                  border={'none'}
                />
                <MenuList bg={'gray.900'} color={'white'}>
                  <MenuItem as={'a'} onClick={() => router.push('/')}>
                    Home
                  </MenuItem>
                  <MenuItem as={'a'} href="#skills">
                    <SignInButton />
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          )}
        </Flex>
      </Flex>

      <Flex justifyContent="center">
        <Flex flexDir={'column'}>
          {posts.map((post) => (
            <Post
              id={post.id}
              preview={post.preview}
              title={post.title}
              shortDate={post.shortDate}
            />
          ))}
        </Flex>
      </Flex>
    </>
  );
}
