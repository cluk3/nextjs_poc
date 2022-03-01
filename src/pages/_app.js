import { ChakraProvider } from "@chakra-ui/react";
import NextNProgress from "nextjs-progressbar";

import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <NextNProgress />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
