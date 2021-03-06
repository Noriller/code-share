import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '@fontsource/lexend/latin.css';

import Layout from 'components/layout';

import customTheme from 'styles/customTheme';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={customTheme}>
    <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
    </Head>
    <Layout>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
);

export default MyApp;
