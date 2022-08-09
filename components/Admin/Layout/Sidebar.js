import { Flex } from '@chakra-ui/react';

const AdminSidebar = () => {
	return (
		<Flex
			top="56px"
			position="fixed"
			flexDirection="column"
			width="216px"
			height="calc(100% - 56px)"
			borderRight="1px solid #dfe6e9"
		></Flex>
	);
};

export default AdminSidebar;
