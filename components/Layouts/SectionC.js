import { Box, Flex } from '@chakra-ui/react';

export const SectionC = (props) => {
	const { isReverse, leftContent, rightContent, customSize, ...rest } = props;

	return (
		<Box {...rest} pos="relative" maxW="1280px" margin="0 auto">
			<Flex
				flexDirection={{
					base: 'column',
					md: isReverse ? 'row-reverse' : 'row',
				}}
			>
				<Box
					w={{
						base: '100%',
						md: customSize ? customSize[0] : '50%',
					}}
				>
					{leftContent}
				</Box>
				<Box
					w={{
						base: '100%',
						md: customSize ? customSize[1] : '50%',
					}}
					flexDirection={{
						base: 'column',
						md: isReverse ? 'row-reverse' : 'row',
					}}
				>
					{rightContent}
				</Box>
			</Flex>
		</Box>
	);
};
