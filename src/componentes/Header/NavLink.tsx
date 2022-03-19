import {
  Box,
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
import { BsToggle2On } from 'react-icons/bs';
import { RiMenuLine } from 'react-icons/ri';
import { Link as LinkScroll } from 'react-scroll';
import styles from '../Header/styles.module.scss';

export function NavLink() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

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
          <LinkScroll
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            to="blog"
          >
            Blog
          </LinkScroll>
          <Icon as={BsToggle2On} fontSize="30" />
        </HStack>
      ) : (
        <Menu colorScheme="blackAlpha">
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<RiMenuLine />}
            variant="unstyled"
          />
          <MenuList>
            <MenuItem>New Tab</MenuItem>
            <MenuItem>New Window</MenuItem>
            <MenuItem>Open Closed Tab</MenuItem>
            <MenuItem>Open File...</MenuItem>
          </MenuList>
        </Menu>
      )}
    </Box>
  );
}
