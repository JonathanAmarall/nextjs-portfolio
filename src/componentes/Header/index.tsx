import styles from '../Header/styles.module.scss';
import { FaToggleOff } from 'react-icons/fa';
import { Box, Flex, HStack, Icon, Image } from '@chakra-ui/react';
import { BsToggle2On } from 'react-icons/bs';
export function Header() {
  return (
    <Flex
      width={'100%'}
      maxW={1480}
      mx="auto"
      align={'center'}
      justifyContent="space-between"
    >
      <Box m={1}>
        <Image mr={2} w={50} src="/images/logo.svg" alt="Jon logo" />
      </Box>
      <Box m={1}>
        <HStack as="nav" pr={8} className={styles.headerContent}>
          <a href="#">Skills</a>
          <a href="#">Contact</a>
          <a href="#">Projects</a>
          <a href="#">Blog</a>
          <Icon as={BsToggle2On} fontSize="30" />
        </HStack>
      </Box>
    </Flex>
  );
}
