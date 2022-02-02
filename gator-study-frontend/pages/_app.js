// import "../styles/auth.css";
// import "../styles/chats.css";
// import "../styles/index.css";
import { ContextProvider } from "../context";
import { ChakraProvider } from '@chakra-ui/react'
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
    <ContextProvider>
    <Component {...pageProps} />
    </ContextProvider>
    </ChakraProvider>
  );
}