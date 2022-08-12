import AdminMain from '@/components/Admin/Layout/Main.js';
import Breadcrumb from '@/components/Admin/Breadcrumb';
import { Flex, Input, Text, Button } from '@chakra-ui/react';

const Company = () => {
	return (
		<>
			<Breadcrumb title="Company"></Breadcrumb>
			<Flex as="section" py={4} px={6} width="480px" flexDirection="column">
				<Flex flexDirection="column">
					<Text as="label" fontWeight={600} fontSize="14px">
						Name
					</Text>
					<Input type="text" mt={1} />
				</Flex>
				<Flex flexDirection="column" mt={5}>
					<Text as="label" fontWeight={600} fontSize="14px">
						Video profile URL
					</Text>
					<Input type="text" mt={1} />
				</Flex>
				<Button
					padding="10px 20px !important"
					height="auto"
					borderRadius="8px !important"
					mt={5}
					display="flex"
					alignSelf="flex-end"
					bg="blue.500 !important"
					_hover={{
						bg: 'blue.600 !important',
						color: 'white',
					}}
				>
					Save
				</Button>
			</Flex>
		</>
	);
};

const getLayout = (page) => {
	return <AdminMain>{page}</AdminMain>;
};

Company.getLayout = getLayout;

export default Company;
