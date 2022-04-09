import { Button, Flex, Input, Stack } from '@chakra-ui/react';

export default function Login() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing="4">
          <Input name="email" placeholder="Email" type="email" />
          <Input name="password" placeholder="Password" type="password" />
        </Stack>
        <Button type="submit" marginTop="6" colorScheme="purple" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
