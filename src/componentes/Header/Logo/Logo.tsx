import { Box, Image } from '@chakra-ui/react';

export function Logo() {
  return (
    <Box m={1}>
      <Image mr={2} w={[10, 50]} src="/images/logo.svg" alt="Jon logo" />
    </Box>
  );
}
