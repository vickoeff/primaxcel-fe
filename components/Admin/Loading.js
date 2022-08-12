import { Spinner, Flex } from '@chakra-ui/react';

const Loading = () => {
	return (
		<Flex
			position="fixed"
			top="0"
			left="0"
			right="0"
			bottom="0"
			background="rgba(255,255,255, 0.7)"
			zIndex="1"
			alignItems="center"
			justifyContent="center"
		>
			<Spinner />
		</Flex>
	);
};

export default Loading;
