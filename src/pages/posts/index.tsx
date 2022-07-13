import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  useBreakpointValue,
  Spinner,
  Link,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { DashboardHeader } from '../../componentes/DashboardHeader';
import { Sidebar } from '../../componentes/Sidebar';
import { ModalCreate } from './modalCreate';

export default function Post() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [page, setPage] = useState(1);
  let isLoading = false;
  let isFetching = false;
  let error = false;
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Box>
        <DashboardHeader />

        <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />

          <Box flex="1" borderRadius={8} bg="gray.800" p="8">
            <Flex mb="8" justify="space-between" align="center">
              <Heading size="lg" fontWeight="normal">
                Posts
                {!isLoading && isFetching && (
                  <Spinner size="sm" color="gray.500" ml="4" />
                )}
              </Heading>

              <Button
                as="a"
                size="sm"
                colorScheme="purple"
                leftIcon={<Icon as={RiAddLine} />}
                fontSize="20"
                onClick={() => onOpen()}
                _hover={{
                  cursor: 'pointer',
                }}
              >
                Criar novo
              </Button>
            </Flex>

            {isLoading ? (
              <Flex justify="center">
                <Spinner />
              </Flex>
            ) : error ? (
              <Flex justify="center">
                <Text>Falha ao obter dados das postagens</Text>
              </Flex>
            ) : (
              <>
                <Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      <Th px={['4', '4', '6']} color="gray.300" width="8">
                        <Checkbox colorScheme="purple" />
                      </Th>
                      <Th>Posts</Th>
                      {isWideVersion && <Th>Data de cadastro</Th>}
                      <Th width="8"></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr key={'oi'}>
                      <Td px={['4', '4', '6']}>
                        <Checkbox colorScheme="purple" />
                      </Td>
                      <Td>
                        <Box>
                          <Link color="purple.400" onMouseEnter={() => {}}>
                            <Text fontWeight="bold">Titulo</Text>
                          </Link>
                          <Text fontSize="sm" color="gray.300">
                            Descricao
                          </Text>
                        </Box>
                      </Td>
                      {isWideVersion && <Td>Data</Td>}
                      <Td>
                        <Button
                          as="a"
                          size="sm"
                          colorScheme="purple"
                          leftIcon={<Icon as={RiPencilLine} />}
                          paddingRight={!isWideVersion && '2px'}
                          fontSize="16"
                        >
                          {isWideVersion ? 'Editar' : ''}
                        </Button>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </>
            )}
          </Box>
          <ModalCreate isOpen={isOpen} onClose={onClose} />
        </Flex>
      </Box>
    </>
  );
}
