import { Container, Box, Text, Image, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import ContactForm from '@/components/ContactForm';
import { MainLayout } from '../components/Layouts';

const ContactUs = () => {
	const router = useRouter();

	const imgPath = router.pathname;

	return (
		<>
			<Head>
				<title>Contact us about Maklon</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="description"
					content="Hubungi kami untuk menanyakan hal seputar Maklon bersama Primaxcel, representatif kami akan segera menghubungi anda."
				></meta>
				<meta name="robots" content="index,follow"></meta>
				<meta name="googlebot" content="index,follow"></meta>
				<meta property="og:type" content="website"></meta>
				<meta
					property="og:url"
					content="https://primaxcelinovasi.co.id/contact-us"
				></meta>
				<meta property="og:title" content="Contact us about Maklon"></meta>
				<meta
					property="og:description"
					content="Hubungi kami untuk menanyakan produk impian anda. Tim riset dan development kami memiliki latar belakang yang kuat dalam produk farmasi."
				></meta>
				{/* <meta property="og:image" content="LINK TO IMAGE"></meta> */}
				<meta name="twitter:title" content="Contact us about Maklon"></meta>
				<meta
					name="twitter:description"
					content="Hubungi kami untuk menanyakan produk impian anda. Tim riset dan development kami memiliki latar belakang yang kuat dalam produk farmasi."
				></meta>
				{/* <meta name="twitter:image" content="LINK TO IMAGE"></meta> */}
				<meta name="twitter:site" content="@primaxcel_inv"></meta>
				<meta name="twitter:creator" content="@primaxcel_inv"></meta>
			</Head>
			<Container
				py={16}
				maxW={{
					base: '100%',
					xl: '1280px',
				}}
				bg="primaxWhite"
				pt={{
					base: '80px',
					md: 24,
				}}
			>
				<Box
					pos="relative"
					display="flex"
					justifyContent="flex-end"
					alignItems="center"
				>
					<Text
						pos="absolute"
						zIndex={1}
						as="h1"
						left={{
							base: '0',
							md: '48px',
						}}
						fontSize={{
							base: '4xl',
							md: '6xl',
						}}
						fontWeight={700}
						color="primaxDarkPurple"
					>
						Maklon
						<br />
						bersama Primaxcel
					</Text>
					<Box
						opacity={{
							base: '0.5',
							md: '1',
						}}
					>
						<Image
							src={`${imgPath}/primaxcel-botol-spray.png`}
							alt="Primaxcel botol spray"
						/>
					</Box>
				</Box>
			</Container>

			<Container
				pb={{
					base: 0,
					md: 16,
				}}
				maxW="container.md"
				bg="primaxWhite"
			>
				<Text as="p">
					Tim Riset dan Pengembangan kami memiliki latar belakang, pengalaman,
					serta portofolio yang kuat dalam memformulasi produk skincare dan
					kosmetik.
				</Text>
			</Container>

			<Container
				py={{
					base: 2,
					md: 16,
				}}
				maxW="container.xl"
				bg="primaxWhite"
			>
				<Flex justifyContent="center" alignItems="center" w="100%">
					<Flex
						flexDirection="column"
						w={{
							base: '100%',
							md: '80%',
						}}
					>
						<Text
							as="h2"
							fontSize="4xl"
							fontWeight="bold"
							color="primaxPurple"
							mb={4}
							id="visit-us"
						>
							Kunjungi kami
						</Text>
						<Box w="100%" bg="primaxBlue" p={6}>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.0222066849374!2d106.70978531473268!3d-6.3911359953755476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e7df9f95e895%3A0xfb804c1095e7ab49!2sPT.%20Primaxcel%20Inovasi!5e0!3m2!1sen!2sid!4v1661927741386!5m2!1sen!2sid"
								width="100%"
								height="600px"
								style={{ border: 0 }}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</Box>
					</Flex>
				</Flex>
			</Container>

			<ContactForm></ContactForm>
		</>
	);
};

const getLayout = (page) => {
	return <MainLayout>{page}</MainLayout>;
};

ContactUs.getLayout = getLayout;

export default ContactUs;
