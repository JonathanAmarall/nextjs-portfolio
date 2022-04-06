import { Modal as ChakraModal, useDisclosure } from '@chakra-ui/react';
export function Modal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <ChakraModal isOpen={isOpen} onClose={onClose}>
        {/* <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Lorem count={2} />
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter> 
          </ModalContent>*/}
      </ChakraModal>
    </>
  );
}
