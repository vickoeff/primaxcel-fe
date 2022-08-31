import {
	Container,
	Box,
	Text,
	Button,
	HStack,
	FormControl,
	FormLabel,
	Image,
	Input,
	Textarea,
	Select,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { SectionA, SectionC } from '@/components/Layouts';
import { useForm } from 'react-hook-form';
import {
	PRODUCT_CONTACT_TYPE,
	PRODUCT_MIN_MOQ,
	PRODUCT_BUDGET,
	PRODUCT_OWNERSHIP,
} from '@/constant/products';
import { MainLayout } from '../components/Layouts';


const ContactUs = () => {
	const router = useRouter();

	const imgPath = router.pathname;

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	const formStyle = {
		backgroundColor: 'primaxBlue',
		borderRadius: '0',
		border: 'unset',
		marginBottom: '6',
	};

	const formLabelStyle = {
		fontSize: 'xl',
		fontWeight: 'bold',
	};

	return (
		<>
      <Container py={16} pt={24} maxW="container.xl" bg="primaxWhite">
						<Box pos="relative" display="flex" justifyContent="flex-end" alignItems="center">
							<Text
								pos="absolute"
								as="h1"
								left="9rem"
								fontSize="6xl"
								fontWeight={700}
								color="primaxDarkPurple"
							>
								Maklon<br/>
								bersama Primaxcel
							</Text>
							<Box >
								<Image src={`${imgPath}/Mockup-Spray-bottle-Primaxcel.png`} alt="Spray bottle" />
							</Box>
						</Box>
      </Container>

      <Container pb={16} maxW="container.md" bg="primaxWhite">
        <Text as="p">
          KMI PERTim Riset dan Developmen kami mmeiliki latar belakang dan portfolio yang kuat dalam formulasi produk  farmasi,
        </Text>
      </Container>

      <Container py={16} maxW="container.xl" bg="primaxWhite">
				<Box display="flex" justifyContent="center">
					<Box>
						<Text
							as="h2"
							fontSize="4xl"
							fontWeight="bold"
							color="primaxPurple"
							mb={4}
							>
							Kunjungi kami
						</Text>
						<Box maxW="fit-content" bg="primaxBlue" p={6}>
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.0222066849374!2d106.70978531473268!3d-6.3911359953755476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e7df9f95e895%3A0xfb804c1095e7ab49!2sPT.%20Primaxcel%20Inovasi!5e0!3m2!1sen!2sid!4v1661927741386!5m2!1sen!2sid" width="600" height="450" style={{border: 0}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
						</Box>
					</Box>
				</Box>
      </Container>

			<SectionC
				customSize={['30%', '70%']}
				leftContent={
					<Box h="full" px={12} py={16} bg="primaxLightBlue">
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
							Mohon sertakan minum MOQ yang ingin anda buat beserta informasi
							lain seputar produk yang ingin anda buat maupun yang ingin anda
							ketahui.
						</Text>
					</Box>
				}
				rightContent={
					<Box px={20} py={16}>
						<Container maxW="container.md">
							<form onSubmit={handleSubmit(onSubmit)}>
								<HStack justifyContent="space-between" gap={4}>
									<FormControl>
										<FormLabel {...formLabelStyle}>Nama</FormLabel>
										<Input
											type="text"
											placeholder="Nama Anda"
											{...register('example')}
											{...formStyle}
										/>
									</FormControl>
									<FormControl>
										<FormLabel {...formLabelStyle}>E-mail</FormLabel>
										<Input
											type="text"
											placeholder="example@mail.com"
											{...register('example')}
											{...formStyle}
										/>
									</FormControl>
								</HStack>
								<HStack justifyContent="space-between" gap={4}>
									<FormControl>
										<FormLabel fontSize="xl" fontWeight="bold">
											Domisili
										</FormLabel>
										<Input
											type="text"
											placeholder="Kota/Provinsi"
											{...register('example')}
											{...formStyle}
										/>
									</FormControl>
									<FormControl>
										<FormLabel {...formLabelStyle}>No. Telp/WA</FormLabel>
										<Input
											type="tel"
											placeholder="+62"
											{...register('example')}
											{...formStyle}
										/>
									</FormControl>
								</HStack>
								<HStack justifyContent="space-between" gap={4}>
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
								</HStack>
								<HStack justifyContent="space-between" gap={4}>
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
								</HStack>
								<FormControl>
									<FormLabel {...formLabelStyle}>Informasi Lainnya</FormLabel>
									<Textarea
										{...formStyle}
										maxW="full"
										{...register('example')}
									/>
								</FormControl>
								<Button mt={12} px={16} py={7}>
									Submit
								</Button>
							</form>
						</Container>
					</Box>
				}
			/>
		</>
	);
};

const getLayout = (page) => {
	return <MainLayout>{page}</MainLayout>;
};

ContactUs.getLayout = getLayout;

export default ContactUs;
