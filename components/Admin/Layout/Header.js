import { Flex } from '@chakra-ui/react';

const AdminHeader = () => {
	return (
		<Flex
			as="header"
			width="100%"
			height="56px"
			padding="0 24px"
			bg="white"
			position="fixed"
			top="0px"
			borderBottom="1px solid #dfe6e9"
		></Flex>
	);
};

export default AdminHeader;
