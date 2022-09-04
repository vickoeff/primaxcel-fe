import { Box, Flex, Image, Text } from '@chakra-ui/react';

const ProductCard = ({ url, title }) => {
	return (
		<Box
			w={{
				base: 'calc(50% - 8px)',
				md: '300px',
				lg: '320px',
			}}
			ml="0 !important"
			mt={{
				base: '16px !important',
				md: '32px !important',
			}}
		>
			<Flex
				alignItems="center"
				justifyContent="center"
				overflow="hidden"
				w="100%"
				h={{
					base: 'calc(((100vw / 2) - 26px) / 4 * 5)',
					md: '375px',
					lg: '400px',
				}}
			>
				<Image src={url} alt={title} objectFit="contain" w="100%" h="100%" />
			</Flex>
			<Text
				as="p"
				textAlign="center"
				fontWeight="bold"
				overflow="hidden"
				whiteSpace="nowrap"
				textOverflow="ellipsis"
			>
				{title}
			</Text>
		</Box>
	);
};

export default ProductCard;
