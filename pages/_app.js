import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/nunito/400.css';
import theme from '../theme';
import '../global.css';
import { LoadingProvider } from '@/context/loading';
import { AuthProvider } from '@/context/auth';

function MyApp({ Component, pageProps }) {
	const getLayout = Component.getLayout || ((page) => page);

	return (
		<ChakraProvider theme={theme}>
			<AuthProvider>
				<LoadingProvider>
					{getLayout(<Component {...pageProps} />)}
				</LoadingProvider>
			</AuthProvider>
		</ChakraProvider>
	);
}

export default MyApp;
