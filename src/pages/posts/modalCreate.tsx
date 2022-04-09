import {
  Button,
  Modal,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Input,
  VStack,
  ModalFooter,
} from '@chakra-ui/react';
import TextEditor from '../../componentes/TextEditor';

interface ModalChakraProps {
  onClose: () => void;
  isOpen: boolean;
}

interface IPostForm {
  title: string;
  text: string;
  date: Date;
}

export function ModalCreate({ isOpen, onClose }: ModalChakraProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent height={400}>
        <ModalCloseButton />
        <ModalBody
          display={'flex'}
          flexDir="column"
          alignItems={'center'}
          justifyContent={'center'}
        >
          <VStack spacing={8}>
            <Input type={'text'} placeholder="Título" />
            <TextEditor />
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={onClose} variant="ghost">
            Fechar
          </Button>
          <Button type="submit" colorScheme="purple">
            Salvar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
