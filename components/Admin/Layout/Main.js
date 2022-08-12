import AdminHeader from './Header';
import AdminSidebar from './Sidebar';
import { Flex } from '@chakra-ui/react';

const AdminMain = ({ children }) => {
	return (
		<>
			<AdminHeader></AdminHeader>
			<Flex height="calc(100% - 56px)" bg="white">
				<AdminSidebar></AdminSidebar>
				<Flex
					as="main"
					flexDirection="column"
					width="100%"
					height="100%"
					overflow="auto"
				>
					{children}
				</Flex>
			</Flex>
		</>
	);
};

export default AdminMain;
