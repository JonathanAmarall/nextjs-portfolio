import { Flex } from '@chakra-ui/react';
import { Logo } from './Logo/Logo';
import { NavLink } from './NavLink';

export function Header() {
  return (
    <Flex
      width={'100%'}
      mx="auto"
      align={'center'}
      justifyContent="space-between"
      bg={'gray.800'}
      borderBottom={'1px solid gray.500'}
      zIndex={1}
      position={'sticky'}
      top={0}
    >
      <Logo />
      <NavLink />
    </Flex>
  );
}

export function NavMobile() {
  return;
}
