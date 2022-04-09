import 'react-quill/dist/quill.snow.css';
import '../styles/global.scss';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { darkTheme } from '../styles/theme';
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS={true} theme={darkTheme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
