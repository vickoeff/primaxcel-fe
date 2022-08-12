import { Flex, Text } from '@chakra-ui/react';

const AdminHeader = () => {
	return (
		<Flex
			as="header"
			width="100%"
			height="56px"
			padding="0 24px"
			bg="white"
			justifyContent="space-between"
			alignItems="center"
			borderBottom="1px solid #dfe6e9"
		>
			<Flex border="1px solid red" width="200px" height="40px"></Flex>
			<Text as="span">John Doe</Text>
		</Flex>
	);
};

export default AdminHeader;
