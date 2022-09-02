import { Box, Text, Flex } from '@chakra-ui/react';
import Image from 'next/image';

const CarouselItem = (props) => {
	const { img, label } = props;

	return (
		<Box
			display="inline-block"
			my={8}
			maxW="336px"
			px={{
				md: '8px',
			}}
		>
			<Flex
				flexDirection="column"
				boxShadow="4px 12px 5px #00000045"
				bg="primaxWhite"
			>
				<Flex p="20px 20px 0">
					<Image src={img} alt={img} />
				</Flex>
				<Text my={4} textAlign="center">
					{label}
				</Text>
			</Flex>
		</Box>
	);
};

export default CarouselItem;
