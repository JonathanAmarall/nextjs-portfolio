import { Text } from '@chakra-ui/react';

export function Logo() {
  return (
    <Text
      fontSize={['2xl', '3xl']}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      jon
      <Text as="span" marginLeft="1" color="purple.500">
        .
      </Text>
      dev
    </Text>
  );
}
