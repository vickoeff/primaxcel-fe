import {
	Flex,
	Input,
	Button,
	FormControl,
	FormLabel,
	FormErrorMessage,
	useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useLoading } from '@/context/loading';
import { useAuth } from '@/context/auth';
import services from '@/services';
import Cookies from 'js-cookie';

const Admin = () => {
	const { setLoading } = useLoading();
	const { setUser } = useAuth();
	const toast = useToast();
	const router = useRouter();
	const [credential, setCredential] = useState({
		email: '',
		password: '',
	});
	const [error, setError] = useState({
		email: '',
		password: '',
	});

	const onSubmitCredential = async (event) => {
		event.preventDefault();

		setError({
			email: credential.email ? '' : 'Please fill the required field',
			password: credential.password ? '' : 'Please fill the required field',
		});

		if (!credential.email || !credential.password) return;

		try {
			setLoading(true);

			const response = await services.login(credential);

			if (response && response.status && response.data) {
				setUser({
					name: response.data.name,
				});
				Cookies.set('access_token', response.data.token);
				router.push('/admin/blogs');
			}
		} catch (error) {
			toast({
				position: 'top',
				description: 'Invalid credential',
				status: 'error',
				duration: 3000,
			});
		} finally {
			setLoading(false);
		}
	};

	const onFormChange = (event) => {
		const value = event.target.value;
		const name = event.target.name;

		setCredential({
			...credential,
			[name]: value,
		});

		setError({
			...error,
			[name]: '',
		});
	};

	return (
		<Flex
			position="fixed"
			as="form"
			top="50%"
			left="50%"
			transform="translate(-50%, -50%)"
			width="400px"
			padding="20px"
			flexDirection="column"
			bg="white"
			borderRadius="6px"
			boxShadow="0px 2px 4px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12)"
			onSubmit={onSubmitCredential}
		>
			<FormControl isInvalid={error.email}>
				<FormLabel fontWeight={600} fontSize="14px" mb="0">
					Email
				</FormLabel>
				<Input
					type="text"
					mt={1}
					value={credential.email}
					name="email"
					onChange={onFormChange}
				/>
				<FormErrorMessage mt={1}>{error.email}</FormErrorMessage>
			</FormControl>
			<FormControl isInvalid={error.password} mt={4}>
				<FormLabel fontWeight={600} fontSize="14px" mb="0">
					Password
				</FormLabel>
				<Input
					type="password"
					mt={1}
					value={credential.password}
					name="password"
					onChange={onFormChange}
				/>
				<FormErrorMessage mt={1}>{error.password}</FormErrorMessage>
			</FormControl>
			<Button
				mt={6}
				py={2}
				bg="primaxLightBlue"
				borderRadius="8px !important"
				type="submit"
			>
				Login
			</Button>
		</Flex>
	);
};

export default Admin;
