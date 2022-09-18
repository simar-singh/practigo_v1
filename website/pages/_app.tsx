import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '../css/globals.css'

const theme = extendTheme({
  colors: {
    brand: {
      100: '#29BEB0',
      200: ' #bff2ed'
    }
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;