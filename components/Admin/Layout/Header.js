import {
	Flex,
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverBody,
	Box,
	Button,
	Image,
} from '@chakra-ui/react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/auth';

const AdminHeader = () => {
	const router = useRouter();
	const { user } = useAuth();

	const logout = () => {
		Cookies.remove('access_token');
		router.push('/admin');
	};

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
			<Flex width="200px" height="40px">
				<Image
					src="/primaxcel_logo.svg"
					alt="Primaxcel logo"
					objectFit="contain"
					w="100%"
					h="100%"
				/>
			</Flex>
			<Popover placement="bottom-end">
				<PopoverTrigger>
					<Button
						padding="0 !important"
						borderRadius="8px !important"
						variant="link"
						color="gray.800"
						background="none !important"
						_hover={{
							bg: 'none !important',
							color: 'gray.800',
						}}
					>
						{user.name}
					</Button>
				</PopoverTrigger>
				<PopoverContent width="150px">
					<PopoverBody padding="4px 0">
						<Flex as="ul">
							<Box
								as="li"
								listStyleType="none"
								px={4}
								py={1}
								width="100%"
								cursor="pointer"
								_hover={{
									bg: 'gray.100',
								}}
								onClick={logout}
							>
								Logout
							</Box>
						</Flex>
					</PopoverBody>
				</PopoverContent>
			</Popover>
		</Flex>
	);
};

export default AdminHeader;
