import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { Title } from '../Title';

export function Contact() {
  return (
    <Flex
      dir="column"
      flexDir="column"
      w={'98vw'}
      h="700px"
      justify="center"
      align={'center'}
      background="url('/images/background-inverse.svg') no-repeat right bottom"
    >
      <Box id="contact" alignItems={'center'}>
        <Title name="Contact" />
      </Box>
      <Flex
        as="form"
        width={'90%'}
        maxW={600}
        flexDir="column"
        bg="gray.800"
        p="8"
        borderRadius={8}
      >
        <FormControl pb={3}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input id="name" type="text" />
        </FormControl>
        <FormControl pb={3}>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input id="email" size={'md'} type="email" />
        </FormControl>
        <FormControl pb={3}>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea id="message" size="sm" />
        </FormControl>
        <Button type="submit" mt="6" colorScheme="purple">
          Send Message
        </Button>
      </Flex>
    </Flex>
  );
}
