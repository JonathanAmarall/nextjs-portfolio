import { Text, Link, LinkProps } from '@chakra-ui/react';
import { useState } from 'react';

interface ITextPreviewProps extends LinkProps {
  preview: string;
}

export function TextPreview({ preview, ...rest }: ITextPreviewProps) {
  const [hiddenText, setHiddenText] = useState<boolean>(true);

  if (preview?.length > 150) {
    preview = `${preview?.substring(0, 150)}...`;
  }

  return (
    <>
      <Text
        _hover={{
          opacity: 0.9,
        }}
        onMouseOver={() => {
          setHiddenText(false);
        }}
        onMouseLeave={() => {
          setHiddenText(true);
        }}
        fontSize={'1rem'}
      >
        <div dangerouslySetInnerHTML={{ __html: `${preview}` }}></div>
        <Link
          {...rest}
          pl="1rem"
          hidden={hiddenText}
          fontSize={'1.2rem'}
          fontWeight={'bold'}
          color={'purple'}
        >
          Se more...
        </Link>
      </Text>
    </>
  );
}
