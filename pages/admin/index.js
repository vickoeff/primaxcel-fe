import { Flex, Input, Text, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Admin = () => {
	const router = useRouter();

	const goToAdminPage = () => {
		// TODO: credential validation

		router.push('/admin/blogs');
	};

	return (
		<Flex
			position="fixed"
			top="50%"
			left="50%"
			transform="translate(-50%, -50%)"
			width="400px"
			padding="20px"
			flexDirection="column"
			bg="white"
			borderRadius="6px"
			boxShadow="0px 2px 4px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12)"
		>
			<Flex flexDirection="column">
				<Text as="label" fontWeight={600}>
					Username
				</Text>
				<Input mt={1}></Input>
			</Flex>
			<Flex flexDirection="column" mt={4}>
				<Text as="label" fontWeight={600}>
					Password
				</Text>
				<Input mt={1}></Input>
			</Flex>
			<Button mt={4} bg="primaxLightBlue" onClick={goToAdminPage}>
				Login
			</Button>
		</Flex>
	);
};

export default Admin;
