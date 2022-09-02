import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
	sm: '480px',
	md: '768px',
	lg: '960px',
	xl: '1200px',
	'2xl': '1536px',
};

const colorScheme = {
	lightBlue: '#edfcff',
	blue: '#c9e5eb',
	white: '#f8fdfe',
	lightPurple: '#725d9c',
	purple: '#4a405f',
	darkPurple: '#020953',
	footer: '#addded',
};

const theme = extendTheme({
	colors: {
		primaxLightBlue: colorScheme.lightBlue,
		primaxWhite: colorScheme.white,
		primaxBlue: colorScheme.blue,
		primaxLightPurple: colorScheme.lightPurple,
		primaxPurple: colorScheme.purple,
		primaxDarkPurple: colorScheme.darkPurple,
		footer: colorScheme.footer,
		primaxGray: {
			100: '#f7f7f7',
			200: '#e7e9eb',
			300: '#d8dcdf',
			400: '#c8cfd3',
			500: '#b9c1c7',
			600: '#aab4bb',
			700: '#9ba8af',
			800: '#8d9ba4',
			900: '#e8e99;',
		},
	},
	styles: {
		global: {
			body: {
				fontFamily: 'nunito',
				bg: 'primaxWhite',
				height: '100%',
			},
			html: {
				height: '100%',
			},
			a: {
				cursor: 'pointer',
			},
			button: {
				py: 8,
				px: '14 !important',
				bg: 'primaxPurple!important',
				borderRadius: '2xl !important',
				color: 'primaxWhite',
				_hover: {
					bg: 'primaxDarkPurple!important',
					transition: '0.5s',
					color: 'primaxBlue',
				},
			},
			h2: {
				fontSize: '4xl',
				fontWeight: 800,
				textColor: 'primaxDarkPurple',
			},
			p: {
				textColor: 'primaxPurple',
				fontSize: 'xl',
				fontWeight: 400,
				textAlign: 'justify',
				mb: '4',
			},
		},
	},
	breakpoints,
});

export default theme;
