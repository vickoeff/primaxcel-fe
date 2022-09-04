import { Box, Text, Flex, Image } from '@chakra-ui/react';

const CarouselItem = (props) => {
	const { img, label } = props;

	return (
		<Box display="inline-block" my={8} minW="250px" px="8px">
			<Flex
				flexDirection="column"
				boxShadow="4px 12px 5px #00000045"
				bg="primaxWhite"
			>
				<Flex p="20px 25px 0" h="320px">
					<Image src={img} alt={label} objectFit="cover" />
				</Flex>
				<Text my={4} textAlign="center">
					{label}
				</Text>
			</Flex>
		</Box>
	);
};

export default CarouselItem;
