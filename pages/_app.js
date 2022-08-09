import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/nunito/400.css';
import theme from '../theme';

function MyApp({ Component, pageProps }) {
	const getLayout = Component.getLayout || ((page) => page);

	return (
		<ChakraProvider theme={theme}>
			{getLayout(<Component {...pageProps} />)}
		</ChakraProvider>
	);
}

export default MyApp;
