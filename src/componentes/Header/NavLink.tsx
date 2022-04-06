import {
  Box,
  Button,
  HStack,
  Icon,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BsToggle2On } from 'react-icons/bs';
import { RiMenuLine } from 'react-icons/ri';
import { Link as LinkScroll } from 'react-scroll';
import styles from '../Header/styles.module.scss';

export function NavLink() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  const router = useRouter();

  return (
    <Box m={1}>
      {isWideVersion ? (
        <HStack as="nav" pr={8} className={styles.headerContent}>
          <LinkScroll
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            to="skills"
          >
            Skills
          </LinkScroll>
          <LinkScroll
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            to="contact"
          >
            Contact
          </LinkScroll>
          <LinkScroll
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            to="projects"
          >
            Projects
          </LinkScroll>
          <Link onClick={() => router.push('/blog')}>Blog</Link>
          <Icon as={BsToggle2On} fontSize="30" />
        </HStack>
      ) : (
        <>
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
                <MenuItem as={'a'} href="#skills">
                  Skills
                </MenuItem>
                <MenuItem as={'a'} href="#contact">
                  Contact
                </MenuItem>
                <MenuItem as={'a'} href="#projects">
                  Projects
                </MenuItem>
                <MenuItem as={'a'} onClick={() => router.push('/blog')}>
                  Blog
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </>
      )}
    </Box>
  );
}
