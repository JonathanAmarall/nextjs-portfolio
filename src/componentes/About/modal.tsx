import { ModalContentProps } from '@chakra-ui/core';
import {
  ModalBody,
  ModalCloseButton,
  ModalContent,
  Text,
  Modal as ChakraModal,
  UseModalProps,
} from '@chakra-ui/react';

export function Modal({ isOpen, onClose }: UseModalProps) {
  return (
    <ChakraModal
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      colorScheme="cyan"
    >
      <ModalContent>
        <ModalCloseButton />
        <ModalBody
          display={'flex'}
          flexDir="column"
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Text fontSize="4xl">Hello!</Text>
          <Text fontSize="4xl">I'm Jonathan Amaral.</Text>
          <Text fontSize="4xl">Web developer from Brazil.</Text>
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
}
