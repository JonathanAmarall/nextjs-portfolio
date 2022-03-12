import '../styles/global.scss';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { darkTheme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS={false} theme={darkTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
