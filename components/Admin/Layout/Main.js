import AdminHeader from './Header';
import AdminSidebar from './Sidebar';
import { Flex } from '@chakra-ui/react';

const AdminMain = ({ children }) => {
	return (
		<>
			<AdminHeader></AdminHeader>
			<AdminSidebar></AdminSidebar>
			<Flex
				as="main"
				flexDirection="column"
				width="calc(100% - 216px)"
				margin="56px 0 0 216px"
			>
				{children}
			</Flex>
		</>
	);
};

export default AdminMain;
