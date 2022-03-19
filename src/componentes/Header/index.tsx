import { Flex } from '@chakra-ui/react';
import { Logo } from './Logo';
import { NavLink } from './NavLink';

export function Header() {
  return (
    <Flex
      width={'100%'}
      mx="auto"
      align={'center'}
      justifyContent="space-between"
      style={{
        position: 'sticky',
        top: 0,
        backgroundColor: 'var(--secondary)',
        width: '100%',
        borderBottom: '1px solid var(--gray-700)',
      }}
    >
      <Logo />
      <NavLink />
    </Flex>
  );
}

export function NavMobile() {
  return;
}
