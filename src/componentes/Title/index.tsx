import { Text } from '@chakra-ui/react';

interface ITitleProps {
  name: string;
}

export function Title({ name }: ITitleProps) {
  return (
    <Text
      textDecor={'underline solid var(--primary) 0.3rem'}
      decoration=""
      fontSize="4xl"
      align={'center'}
      pb="3rem"
    >
      {name}
    </Text>
  );
}
