import { Box, Text, Flex, Image } from '@chakra-ui/react';

const CarouselItem = (props) => {
	const { img, label } = props;

	return (
		<Box
			display="inline-block"
			my={8}
			minW={{
				base: 'calc(0.7 * 100vw)',
				sm: '210px',
				xl: '240px',
			}}
			maxW={{
				base: 'calc(0.7 * 100vw)',
				sm: '210px',
				xl: '240px',
			}}
			h={{
				base: 'calc((0.7 * 100vw) / 3 * 4)',
				sm: '280px',
				xl: '320px',
			}}
		>
			<Flex
				flexDirection="column"
				boxShadow="4px 12px 5px #00000045"
				bg="primaxWhite"
			>
				<Flex h="auto" justifyContent="center" pt="20px">
					<Flex
						w={{
							base: 'calc(((0.7 * 100vw) / 3 * 4) - 150px)',
							sm: '170px',
							md: '180px',
							xl: '200px',
						}}
						h={{
							base: 'calc((((100vw - 120px) / 3 * 4) - 150px) / 5 * 6)',
							sm: '204px',
							md: '225px',
							xl: '240px',
						}}
						justifyContent="center"
					>
						<Image src={img} alt={label} objectFit="cover" />
					</Flex>
				</Flex>
				<Text
					my={{
						base: 3,
						sm: 3,
						md: 4,
					}}
					textAlign="center"
					noOfLines={1}
				>
					{label}
				</Text>
			</Flex>
		</Box>
	);
};

export default CarouselItem;
