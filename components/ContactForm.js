import { SectionC } from '@/components/Layouts';
import {
	Box,
	Text,
	Container,
	Flex,
	Button,
	FormControl,
	FormLabel,
	Input,
	Select,
	Textarea,
	useToast,
} from '@chakra-ui/react';
import {
	PRODUCT_CONTACT_TYPE,
	PRODUCT_MIN_MOQ,
	PRODUCT_BUDGET,
	PRODUCT_OWNERSHIP,
} from '@/constant/products';
import { useState } from 'react';
import services from '@/services';

const ContactForm = () => {
	const toast = useToast();
	const [contactForm, setContactForm] = useState({
		name: '',
		email: '',
		district: '',
		phone: '',
		productType: '',
		minMoq: '',
		ownership: '',
		budget: '',
		otherInfo: '',
	});

	const onUpdateForm = (event) => {
		const value = event.target.value;
		const name = event.target.name;

		setContactForm({
			...contactForm,
			[name]: value,
		});
	};

	const onFormSubmit = async (event) => {
		event.preventDefault();

		let isEmptyForm = false;

		for (const key in contactForm) {
			if (!contactForm[key]) {
				isEmptyForm = true;
				break;
			}
		}

		if (isEmptyForm) {
			return toast({
				position: 'top',
				description: 'Please fill the contact form',
				status: 'info',
				duration: 3000,
			});
		}

		const emailRegex =
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		const isValidEmail = emailRegex.test(contactForm.email);

		if (!isValidEmail) {
			return toast({
				position: 'top',
				description: 'Please use a valid email address',
				status: 'info',
				duration: 3000,
			});
		}

		const phoneRegex =
			/(\+62 ((\d{3}([ -]\d{3,})([- ]\d{4,})?)|(\d+)))|(\(\d+\) \d+)|\d{3}( \d+)+|(\d+[ -]\d+)|\d+/;

		const isValidPhone = phoneRegex.test(contactForm.phone);

		if (!isValidPhone) {
			return toast({
				position: 'top',
				description: 'Please use a valid phone number',
				status: 'info',
				duration: 3000,
			});
		}

		try {
			const response = await services.sendEmail({
				...contactForm,
			});

			if (response && response.status && response.data) {
				toast({
					position: 'top',
					description: 'We will get back to you as soon as possible',
					status: 'success',
					duration: 3000,
				});

				setContactForm({
					name: '',
					email: '',
					district: '',
					phone: '',
					productType: '',
					minMoq: '',
					ownership: '',
					budget: '',
					otherInfo: '',
				});
			}
		} catch (error) {
			toast({
				position: 'top',
				description: 'Failed to send your email',
				status: 'error',
				duration: 3000,
			});
		}
	};

	const formStyle = {
		backgroundColor: 'primaxBlue',
		borderRadius: '0',
		border: 'unset',
		marginBottom: {
			base: '2',
			sm: '6',
		},
	};

	const formLabelStyle = {
		fontSize: 'xl',
		fontWeight: 'bold',
	};

	return (
		<SectionC
			id="contact-form"
			customSize={['30%', '70%']}
			leftContent={
				<Box
					h="full"
					py={{ base: '10', lg: '16' }}
					px={{ base: '4', md: '8', lg: '16' }}
					bg="primaxLightBlue"
				>
					<Text
						as="h3"
						fontSize="2xl"
						fontWeight="bold"
						color="primaxPurple"
						mb={4}
					>
						Isi form untuk informasi lengkap seputar maklon
					</Text>
					<Text as="p" fontSize="md">
						Silahkan isi form di samping untuk memudahkan representatif kami
						menghubungi Anda.
					</Text>
					<Text as="p" fontSize="md" mb={0}>
						Mohon sertakan minimum MOQ yang Anda harapkan beserta informasi lain
						seputar produk yang ingin Anda buat maupun ketahui.
					</Text>
				</Box>
			}
			rightContent={
				<Box
					py={{ base: '10', lg: '16' }}
					px={{ base: '4', md: '8', lg: '16' }}
				>
					<Container
						maxW="container.md"
						padding={{
							base: '0',
							md: '0 16px',
						}}
					>
						<form onSubmit={onFormSubmit}>
							<Flex
								justifyContent="space-between"
								gap={4}
								flexDirection={{
									base: 'column',
									sm: 'row',
								}}
							>
								<FormControl>
									<FormLabel {...formLabelStyle}>Nama</FormLabel>
									<Input
										type="text"
										placeholder="Nama Anda"
										name="name"
										value={contactForm.name}
										onChange={onUpdateForm}
										{...formStyle}
									/>
								</FormControl>
								<FormControl>
									<FormLabel {...formLabelStyle}>E-mail</FormLabel>
									<Input
										type="text"
										placeholder="example@mail.com"
										name="email"
										value={contactForm.email}
										onChange={onUpdateForm}
										{...formStyle}
									/>
								</FormControl>
							</Flex>
							<Flex
								flexDirection={{
									base: 'column',
									sm: 'row',
								}}
								justifyContent="space-between"
								gap={4}
							>
								<FormControl>
									<FormLabel fontSize="xl" fontWeight="bold">
										Domisili
									</FormLabel>
									<Input
										type="text"
										placeholder="Kota/Provinsi"
										name="district"
										value={contactForm.district}
										onChange={onUpdateForm}
										{...formStyle}
									/>
								</FormControl>
								<FormControl>
									<FormLabel {...formLabelStyle}>No. Telp/WA</FormLabel>
									<Input
										type="tel"
										placeholder="+62"
										name="phone"
										value={contactForm.phone}
										onChange={onUpdateForm}
										{...formStyle}
									/>
								</FormControl>
							</Flex>
							<Flex
								flexDirection={{
									base: 'column',
									sm: 'row',
								}}
								justifyContent="space-between"
								gap={4}
							>
								<FormControl>
									<FormLabel {...formLabelStyle}>Jenis Produk</FormLabel>
									<Select
										name="productType"
										value={contactForm.productType}
										onChange={onUpdateForm}
										{...formStyle}
									>
										<option value="">-- Pilih --</option>
										{PRODUCT_CONTACT_TYPE.map((product, index) => (
											<option
												key={`product-contact-type-${index}`}
												value={product}
											>
												{product}
											</option>
										))}
									</Select>
								</FormControl>
								<FormControl>
									<FormLabel {...formLabelStyle}>Min. MOQ</FormLabel>
									<Select
										name="minMoq"
										value={contactForm.minMoq}
										onChange={onUpdateForm}
										{...formStyle}
									>
										<option value="">-- Pilih --</option>
										{PRODUCT_MIN_MOQ.map((moq, index) => (
											<option key={`product-moq-${index}`} value={moq}>
												{moq}
											</option>
										))}
									</Select>
								</FormControl>
							</Flex>
							<Flex
								flexDirection={{
									base: 'column',
									sm: 'row',
								}}
								justifyContent="space-between"
								gap={4}
							>
								<FormControl>
									<FormLabel {...formLabelStyle}>Kepemilikan</FormLabel>
									<Select
										name="ownership"
										value={contactForm.ownership}
										onChange={onUpdateForm}
										{...formStyle}
									>
										<option value="">-- Pilih --</option>
										{PRODUCT_OWNERSHIP.map((ownership, index) => (
											<option
												key={`product-ownership-${index}`}
												value={ownership}
											>
												{ownership}
											</option>
										))}
									</Select>
								</FormControl>
								<FormControl>
									<FormLabel {...formLabelStyle}>Budget</FormLabel>
									<Select
										name="budget"
										value={contactForm.budget}
										onChange={onUpdateForm}
										{...formStyle}
									>
										<option value="">-- Pilih --</option>
										{PRODUCT_BUDGET.map((budget, index) => (
											<option key={`product-budget-${index}`} value={budget}>
												{budget}
											</option>
										))}
									</Select>
								</FormControl>
							</Flex>
							<FormControl>
								<FormLabel {...formLabelStyle}>Informasi Lainnya</FormLabel>
								<Textarea
									{...formStyle}
									maxW="full"
									name="otherInfo"
									value={contactForm.otherInfo}
									onChange={onUpdateForm}
								/>
							</FormControl>
							<Button
								type="submit"
								px={{
									base: 0,
									md: 16,
								}}
								width={{
									base: '100%',
									md: 'auto',
								}}
								py={6}
								mt={{
									base: 4,
									md: 8,
								}}
							>
								Submit
							</Button>
						</form>
					</Container>
				</Box>
			}
		/>
	);
};

export default ContactForm;
