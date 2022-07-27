import { ChakraProvider } from "@chakra-ui/react";
import { MainLayout } from "../components/Layouts";
import "@fontsource/nunito/400.css";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
}

export default MyApp;
