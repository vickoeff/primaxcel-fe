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
} from '@chakra-ui/react';
import {
	PRODUCT_CONTACT_TYPE,
	PRODUCT_MIN_MOQ,
	PRODUCT_BUDGET,
	PRODUCT_OWNERSHIP,
} from '@/constant/products';

const ContactForm = () => {
	const onSubmit = () => {};

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
						menghubungi anda.
					</Text>
					<Text as="p" fontSize="md" mb={0}>
						Mohon sertakan minum MOQ yang ingin anda buat beserta informasi lain
						seputar produk yang ingin anda buat maupun yang ingin anda ketahui.
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
						<form onSubmit={onSubmit}>
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
									<Input type="text" placeholder="Nama Anda" {...formStyle} />
								</FormControl>
								<FormControl>
									<FormLabel {...formLabelStyle}>E-mail</FormLabel>
									<Input
										type="text"
										placeholder="example@mail.com"
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
										{...formStyle}
									/>
								</FormControl>
								<FormControl>
									<FormLabel {...formLabelStyle}>No. Telp/WA</FormLabel>
									<Input type="tel" placeholder="+62" {...formStyle} />
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
									<Select {...formStyle}>
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
									<Select {...formStyle}>
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
									<Select {...formStyle}>
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
									<Select {...formStyle}>
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
								<Textarea {...formStyle} maxW="full" />
							</FormControl>
							<Button
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
