import { Box, Text, Link } from '@chakra-ui/react';
import { TextPreview } from './textPreview';

export interface IBlogPost {
  id: string;
  shortDate: string;
  title: string;
  text: string;
}

export function Post({ shortDate, title, text, id }: IBlogPost) {
  return (
    <Box
      p={'15px 15px 15px 15px'}
      mb={3}
      maxW={800}
      w={'100%'}
      height={[200, 150]}
      border={'1px'}
      borderStyle={'solid'}
      borderColor={'gray.700'}
    >
      <Text fontSize={'0.7rem'} pb={'1rem'}>
        {shortDate}
      </Text>
      <Text fontSize={'1.2rem'} fontWeight={'bold'} pb={'1rem'}>
        <Link
          _hover={{ color: 'purple' }}
          onClick={() => console.log('Show', id)}
        >
          {title}
        </Link>
      </Text>
      <TextPreview onClick={() => console.log('Show', id)} preview={text} />
    </Box>
  );
}
