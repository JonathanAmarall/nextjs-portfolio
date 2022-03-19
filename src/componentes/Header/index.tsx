import { Flex, useBreakpointValue } from '@chakra-ui/react';
import { Logo } from './Logo';
import { NavLink } from './NavLink';

export function Header() {
  return (
    <Flex
      width={'100%'}
      maxW={1480}
      mx="auto"
      align={'center'}
      justifyContent="space-between"
    >
      <Logo />
      <NavLink />
    </Flex>
  );
}

export function NavMobile() {
  return;
}
