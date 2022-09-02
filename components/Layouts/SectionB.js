import { Box, Container, Flex } from '@chakra-ui/react';

export const SectionB = (props) => {
	const {
		isReverse,
		img,
		imgWidth,
		content,
		customSize,
		alignItems,
		containerWidth,
		containerPadding,
		minH,
		...rest
	} = props;

	const imgLocationStyle = {
		width: imgWidth ? imgWidth : '50%',
		height: '100%',
		bottom: 0,
		left: isReverse ? 'unset' : 0,
		right: isReverse ? 0 : 'unset',
		pos: 'absolute',
	};

	return (
		<Box {...rest}>
			<Container
				maxW={containerWidth || 'container.xl'}
				padding={containerPadding || '0 1rem'}
			>
				<Flex
					pos="relative"
					minH={minH || '2xl'}
					flexDirection={{
						base: 'column',
						md: isReverse ? 'row-reverse' : 'row',
					}}
					alignItems={alignItems ? alignItems : 'center'}
				>
					<Box
						pos="relative"
						minW={{
							base: '100%',
							md: customSize ? customSize[0] : '50%',
						}}
						minH={minH || '2xl'}
					></Box>
					<Box {...imgLocationStyle}>{img}</Box>
					<Box
						maxW={{
							base: '100%',
							md: customSize ? customSize[0] : '50%',
						}}
					>
						{content}
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};
