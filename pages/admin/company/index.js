import AdminMain from '@/components/Admin/Layout/Main.js';
import Breadcrumb from '@/components/Admin/Breadcrumb';
import {
	Flex,
	Input,
	Button,
	FormControl,
	FormLabel,
	FormErrorMessage,
	useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import services from '@/services';
import { useLoading } from '@/context/loading';

const Company = () => {
	const { setLoading } = useLoading();
	const toast = useToast();

	const [company, setCompany] = useState({
		name: '',
		videoProfileUrl: '',
	});
	const [error, setError] = useState({
		name: '',
		videoProfileUrl: '',
	});

	useEffect(() => {
		const getCompanyDetail = async () => {
			try {
				setLoading(true);

				const response = await services.getCompany();

				if (response && response.status && response.data) {
					setCompany({
						name: response.data.name,
						videoProfileUrl: response.data.videoProfileUrl,
					});
				}
			} catch (error) {
				toast({
					position: 'top',
					description: 'Failed to get company data',
					status: 'error',
					duration: 3000,
				});
			} finally {
				setLoading(false);
			}
		};

		getCompanyDetail();
	}, []);

	const onFormChange = (event) => {
		const value = event.target.value;
		const name = event.target.name;

		setCompany({
			...company,
			[name]: value,
		});

		setError({
			...error,
			[name]: '',
		});
	};

	const onSubmitForm = async (event) => {
		event.preventDefault();

		setError({
			name: company.name ? '' : 'Please fill the required field',
			videoProfileUrl: company.videoProfileUrl
				? ''
				: 'Please fill the required field',
		});

		if (!company.name || !company.videoProfileUrl) return;

		try {
			setLoading(true);

			const response = await services.updateCompany(company);

			if (response && response.status && response.data) {
				toast({
					position: 'top',
					description: 'Company data updated',
					status: 'success',
					duration: 2000,
				});
			}
		} catch (error) {
			toast({
				position: 'top',
				description: 'Failed to update company data',
				status: 'error',
				duration: 3000,
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Breadcrumb title="Company"></Breadcrumb>
			<Flex
				as="form"
				py={4}
				px={6}
				width="480px"
				flexDirection="column"
				onSubmit={onSubmitForm}
			>
				<FormControl isInvalid={error.name}>
					<FormLabel fontWeight={600} fontSize="14px" mb="0">
						Name
					</FormLabel>
					<Input
						type="text"
						mt={1}
						readOnly
						value={company.name}
						name="name"
						onChange={onFormChange}
					/>
					<FormErrorMessage mt={1}>{error.name}</FormErrorMessage>
				</FormControl>
				<FormControl isInvalid={error.videoProfileUrl} mt={4}>
					<FormLabel fontWeight={600} fontSize="14px" mb="0">
						Video profile URL
					</FormLabel>
					<Input
						type="text"
						mt={1}
						value={company.videoProfileUrl}
						name="videoProfileUrl"
						onChange={onFormChange}
					/>
					<FormErrorMessage mt={1}>{error.videoProfileUrl}</FormErrorMessage>
				</FormControl>
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
					type="submit"
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
