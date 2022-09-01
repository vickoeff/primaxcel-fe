import { Box, Container, Flex } from '@chakra-ui/react';
import Image from 'next/image';

export const SectionA = (props) => {
	const {
		isReverse,
		isFitContent,
		img,
		leftContent,
		rightContent,
		customSize,
		gap,
		alignItems,
		containerWidth,
		containerPadding,
		...rest
	} = props;

	return (
		<Box {...rest} pos="relative">
			<Container
				maxW={containerWidth || 'container.xl'}
				padding={containerPadding || '0 1rem'}
			>
				<Flex
					minH={isFitContent ? 'unset' : '2xl'}
					flexDirection={isReverse ? 'row-reverse' : null}
					alignItems={alignItems ? alignItems : 'center'}
					gap={gap ? gap : 'unset'}
				>
					<Box
						minW={customSize ? customSize[0] : '50%'}
						maxW={customSize ? customSize[0] : '50%'}
					>
						{img ? <Image src={img} alt={`image_${img}`} /> : leftContent}
					</Box>
					<Box
						minW={customSize ? customSize[1] : '50%'}
						maxW={customSize ? customSize[1] : '50%'}
					>
						{rightContent}
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};
