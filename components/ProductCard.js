import { Box, Flex, Image, Text } from '@chakra-ui/react';

const ProductCard = ({ url, title }) => {
	return (
		<Box
			w={{
				base: 'calc(50% - 8px)',
				md: '30%',
			}}
		>
			<Flex
				alignItems="center"
				justifyContent="center"
				overflow="hidden"
				w="100%"
				h={{
					base: '300px',
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
