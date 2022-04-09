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
  Modal,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Input,
  HStack,
  VStack,
  ModalFooter,
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import ReactQuill from 'react-quill';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
];
const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

export default function TextEditor({ ...rest }) {
  return (
    <QuillNoSSRWrapper
      {...rest}
      theme="snow"
      formats={formats}
      modules={modules}
      onChange={(v) => console.log(v)}
    />
  );
}
