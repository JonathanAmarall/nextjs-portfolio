import { Box, Flex } from '@chakra-ui/react';
import CarouselSlide from '../CarouselSlide';
import { Title } from '../Title';

export function Projects() {
  return (
    <Flex
      id="projects"
      w={'100%'}
      h={['100vh', '150vh']}
      justifyContent="center"
    >
      <Flex
        justifyContent={'center'}
        alignItems="center"
        width={'100%'}
        flexDir="column"
      >
        <Box>
          <Title name="Projects" />
        </Box>
        <Box maxW={[300, 650]}>
          <CarouselSlide />
        </Box>
      </Flex>
    </Flex>
  );
}
