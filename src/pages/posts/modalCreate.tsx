import {
  Button,
  Modal,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Input,
  VStack,
  ModalFooter,
  useToast,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import TextEditor from '../../componentes/TextEditor';
import { useState } from 'react';
import { api } from '../../services/api';

interface ModalChakraProps {
  onClose: () => void;
  isOpen: boolean;
}

interface IPostForm {
  title: string;
  text: string;
  date: Date;
}

interface IFormError {
  title?: string;
  text?: string;
}

export function ModalCreate({ isOpen, onClose }: ModalChakraProps) {
  const toast = useToast();
  const [errors, setErrors] = useState<IFormError>(null);
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');

  const submitForm = async () => {
    if (!title) setErrors({ title: 'Título não pode ser nulo.' });
    if (!text) setErrors({ text: 'Título não pode ser nulo.' });

    const data: IPostForm = {
      title,
      text,
      date: new Date(),
    };

    let res = await api.post('posts', data);
    console.log(res);
    if (res.status == 200)
      toast({
        title: 'Mensagem enviada com sucesso!',
        description:
          'Obrigado pelo seu contato. Vamos responder o mais breve possível.',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent height={400} as="form" noValidate={true}>
        <ModalCloseButton />
        <ModalBody
          display={'flex'}
          flexDir="column"
          alignItems={'center'}
          justifyContent={'center'}
        >
          <VStack spacing={8}>
            <FormControl isInvalid={!!errors?.title}>
              <Input
                type={'text'}
                placeholder="Título"
                onChange={(e) => setTitle(e.target.value)}
              />
              {!!errors?.title && (
                <FormErrorMessage>{errors.title}</FormErrorMessage>
              )}
            </FormControl>
            <TextEditor onChange={(text) => setText(text)} />
            {!!errors?.text && (
              <FormErrorMessage>{errors.text}</FormErrorMessage>
            )}
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={onClose} variant="ghost">
            Fechar
          </Button>
          <Button onClick={submitForm} colorScheme="purple">
            Salvar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
