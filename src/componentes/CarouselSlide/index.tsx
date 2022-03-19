import { Box, BoxProps } from '@chakra-ui/react';

export default function CarouselSlide({ children, ...restProps }: BoxProps) {
  return (
    <Box
      role="group"
      aria-roledescription="slide"
      flex="0 0 100%"
      style={{ scrollSnapAlign: 'center' }}
      {...restProps}
    >
      <div>{children}</div>
    </Box>
  );
}
