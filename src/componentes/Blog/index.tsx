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
import { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { RiMenuLine } from 'react-icons/ri';
import { Logo } from '../Header/Logo/Logo';
import { SignInButton } from './SignInButton';
import { IBlogPost, Post } from './post';
import { api } from '../../services/api';

export function Blog() {
  const [posts, setPosts] = useState<IBlogPost[]>([]);

  useEffect(() => {
    api.get('posts').then((posts) => {
      setPosts(posts.data as IBlogPost[]);
    });
  }, []);

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

      <Flex justifyContent="center" w={'100%'}>
        <Flex flexDir={'column'} w={'100%'} alignItems={'center'}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              text={post.text}
              title={post.title}
              shortDate={post.shortDate}
            />
          ))}
        </Flex>
      </Flex>
    </>
  );
}
