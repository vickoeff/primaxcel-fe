import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/nunito/400.css';
import theme from '../theme';
import '../global.css';
import { LoadingProvider } from '@/context/loading';
import { AuthProvider } from '@/context/auth';
import Head from 'next/head';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps }) {
	const getLayout = Component.getLayout || ((page) => page);

	const indexing =
		process.env.NEXT_PUBLIC_APP_ENV === 'production'
			? 'index,follow'
			: 'noindex, nofollow';

	return (
		<>
			<Head>
				<meta name="robots" content={indexing}></meta>
				<meta name="googlebot" content={indexing}></meta>
				<link
					rel="apple-touch-icon"
					sizes="57x57"
					href="/apple-icon-57x57.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="60x60"
					href="/apple-icon-60x60.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="72x72"
					href="/apple-icon-72x72.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="/apple-icon-76x76.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="114x114"
					href="/apple-icon-114x114.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="/apple-icon-120x120.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="144x144"
					href="/apple-icon-144x144.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="/apple-icon-152x152.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-icon-180x180.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/android-icon-192x192.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="96x96"
					href="/favicon-96x96.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/manifest.json" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<ChakraProvider theme={theme}>
				<AuthProvider>
					<LoadingProvider>
						{getLayout(<Component {...pageProps} />)}
					</LoadingProvider>
				</AuthProvider>
			</ChakraProvider>
		</>
	);
}

export default MyApp;
