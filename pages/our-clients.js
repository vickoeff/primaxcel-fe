import { useState, useMemo } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { SectionA } from '@/components/Layouts';
import { Box, Container, HStack, Text, Image, Button } from '@chakra-ui/react';
import ClientsDetailModal from '@/components/ClientsDetailModal';

// import static image
import { MainLayout } from '../components/Layouts';

const OurClients = () => {
	const [isOpenModal, setOpenModal] = useState(false);
	const [modalCategory, setModalCategory] = useState('');
	const router = useRouter();

	const imgPath = router.pathname;

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const householdProducts = [
		{
			src: `${imgPath}/cofit.png`,
			name: 'Hand Sanitizer',
		},
		{
			src: `${imgPath}/coronex.png`,
			name: 'Disinfectant',
		},
		{
			src: `${imgPath}/septico-spray.png`,
			name: 'Antiseptic',
		},
		{
			src: `${imgPath}/cofit.png`,
			name: 'Edit Text with Catalogue',
		},
		{
			src: `${imgPath}/coronex.png`,
			name: 'Edit Text with Catalogue',
		},
		{
			src: `${imgPath}/septico-spray.png`,
			name: 'Edit Text with Catalogue',
		},
	];

	const skinCareProducts = [
		{
			src: `${imgPath}/micelar-water.png`,
			name: 'Toner and Micellar Water',
		},
		{
			src: `${imgPath}/face-n-body-wash.png`,
			name: 'Face and Body Wash',
		},
		{
			src: `${imgPath}/face-n-body-wash.png`,
			name: 'Edit Text with Catalogue',
		},
		{
			src: `${imgPath}/cream.png`,
			name: 'Cream',
		},
		{
			src: `${imgPath}/face-oil.png`,
			name: 'Face Oil, Treatment Gel',
		},
		{
			src: `${imgPath}/face-oil.png`,
			name: 'Edit Text with Catalogue',
		},
		{
			src: `${imgPath}/serum.png`,
			name: 'Serum',
		},
		{
			src: `${imgPath}/treatment-gel.png`,
			name: 'Treatment Gel',
		},
		{
			src: `${imgPath}/treatment-gel.png`,
			name: 'Edit Text with Catalogue',
		},
		{
			src: `${imgPath}/serum.png`,
			name: 'Edit Text with Catalogue',
		},
		{
			src: `${imgPath}/treatment-gel.png`,
			name: 'Treatment Gel',
		},
		{
			src: `${imgPath}/treatment-gel.png`,
			name: 'Edit Text with Catalogue',
		},
	];

	const testimoni = [
		{
			photo: `${imgPath}/logo-oleum.png`,
			message:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
		},
		{
			photo: `${imgPath}/logo-silky-white.png`,
			message:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
		},
		{
			photo: `${imgPath}/logo-miju.png`,
			message:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
		},
		{
			photo: `${imgPath}/logo-i-skin.png`,
			message:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
		},
		{
			photo: `${imgPath}/logo-epidena.png`,
			message:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
		},
		{
			photo: `${imgPath}/logo-nbc.png`,
			message:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
		},
		{
			photo: `${imgPath}/logo-iface.png`,
			message:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
		},
		{
			photo: `${imgPath}/logo-clarium.png`,
			message:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
		},
	];

	const handleOpenModal = (category) => {
		setOpenModal(true);
		setModalCategory(category);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	const modalContent = useMemo(() => {
		switch (modalCategory) {
			case 'household':
				return (
					<HStack flexWrap="wrap" justifyContent="space-around" my={14}>
						{householdProducts.map((product) => (
							<Box minW="30%" key={product.name}>
								<Image src={product.src} alt={product.name} mx="auto" />
								<Text as="p" textAlign="center" fontWeight="bold">
									{product.name}
								</Text>
							</Box>
						))}
					</HStack>
				);
			case 'skincare':
				return (
					<HStack flexWrap="wrap" justifyContent="space-around" my={20}>
						{skinCareProducts.map((product) => (
							<Box minW="30%" key={product.name}>
								<Image src={product.src} alt={product.name} mx="auto" />
								<Text as="p" textAlign="center" fontWeight="bold">
									{product.name}
								</Text>
							</Box>
						))}
					</HStack>
				);
			case 'testimoni':
				return (
					<HStack justifyContent="center" flexWrap="wrap" gap={8} my={20}>
						{testimoni.map((testi, idx) => (
							<Box
								display="flex"
								maxW="calc(50% - 1.3rem)"
								p={6}
								key={idx}
								bg="primaxBlue"
								ml="0!important"
								minH="210px"
							>
								<Image
									src={testi.photo}
									alt={testi.photo}
									my="auto"
									mx="auto"
									w="166px"
									h="166px"
									objectFit="contain"
								/>
								<Text as="p" pl={6}>
									{testi.message}
								</Text>
							</Box>
						))}
					</HStack>
				);
		}
	}, [modalCategory, householdProducts, skinCareProducts]);

	return (
		<>
			<Head>
				<title>Our clients that trust us</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="description"
					content="Kami memiliki banyak client yang sudah mempercayakan kami dalam mewujudkan produk impian mereka. Bisnis anda menjadi mudah dengan maklon bersama Primaxcel."
				></meta>
				<meta name="robots" content="index,follow"></meta>
				<meta name="googlebot" content="index,follow"></meta>
				<meta property="og:type" content="website"></meta>
				<meta
					property="og:url"
					content="https://primaxcelinovasi.co.id/our-clients"
				></meta>
				<meta property="og:title" content="Maklon with us"></meta>
				<meta
					property="og:description"
					content="Bisnis skin care anda menjadi mudah dengan maklon bersama Primaxcel. Hubungi kami untuk memulai bisnis anda."
				></meta>
				{/* <meta property="og:image" content="LINK TO IMAGE"></meta> */}
				<meta name="twitter:title" content="Maklon with us"></meta>
				<meta
					name="twitter:description"
					content="Bisnis skin care anda menjadi mudah dengan maklon bersama Primaxcel. Hubungi kami untuk memulai bisnis anda."
				></meta>
				{/* <meta name="twitter:image" content="LINK TO IMAGE"></meta> */}
				{/* <meta name="twitter:site" content="@USERNAME"></meta>
				<meta name="twitter:creator" content="@USERNAME"></meta> */}
			</Head>
			<Box minH={100}></Box>
			<div
				style={{
					minHeight: 'calc(90vh - 77px)',
					backgroundImage: `url(${imgPath}/primaxcel-produk.png)`,
					backgroundPosition: 'bottom',
					backgroundRepeat: 'no-repeat',
					backgroundSize: '100%',
					backgroundColor: 'white',
				}}
			>
				<Container pos="relative" maxW="container.xl">
					<Box
						display="flex"
						justifyContent="center"
						alignItems="start"
						pt={100}
					>
						<Text as="h1" fontSize="6xl" fontWeight="bold" color="primaxPurple">
							Our Clients
						</Text>
					</Box>
				</Container>
			</div>

			<Box minH={100} bg="primaxLightBlue">
				<Container
					pos="relative"
					maxW="container.xl"
					py={16}
					textAlign="center"
				>
					<Text
						as="h3"
						fontSize="4xl"
						fontWeight="bold"
						color="primaxPurple"
						textAlign="center"
					>
						Household Products
					</Text>

					<HStack flexWrap="wrap" justifyContent="space-around" mt={14}>
						{householdProducts.map((product) => (
							<Box minW="30%" key={product.name}>
								<Image src={product.src} alt={product.name} mx="auto" />
								<Text as="p" textAlign="center" fontWeight="bold">
									{product.name}
								</Text>
							</Box>
						))}
					</HStack>

					<Button
						mt={12}
						px={16}
						py={7}
						onClick={() => handleOpenModal('household')}
					>
						Lihat Selengkapnya
					</Button>
				</Container>
			</Box>

			<Box minH={100} bg="primaxWhite">
				<Container
					pos="relative"
					maxW="container.xl"
					py={16}
					textAlign="center"
				>
					<Text
						as="h3"
						fontSize="4xl"
						fontWeight="bold"
						color="primaxPurple"
						textAlign="center"
					>
						Skincare Products
					</Text>

					<HStack flexWrap="wrap" justifyContent="space-around" mt={20}>
						{skinCareProducts.map((product) => (
							<Box minW="30%" key={product.name}>
								<Image src={product.src} alt={product.name} mx="auto" />
								<Text as="p" textAlign="center" fontWeight="bold">
									{product.name}
								</Text>
							</Box>
						))}
					</HStack>

					<Button
						mt={12}
						px={16}
						py={7}
						onClick={() => handleOpenModal('skincare')}
					>
						Lihat Selengkapnya
					</Button>
				</Container>
			</Box>

			<Box minH={100} bg="primaxLightBlue">
				<Container
					pos="relative"
					maxW="container.xl"
					py={16}
					textAlign="center"
				>
					<Text
						as="h2"
						fontSize="4xl"
						fontWeight="bold"
						color="primaxPurple"
						textAlign="left"
					>
						What they say
					</Text>

					<HStack justifyContent="center" flexWrap="wrap" gap={8} mt={20}>
						{testimoni.map((testi, idx) => (
							<Box
								display="flex"
								maxW="calc(50% - 1.3rem)"
								p={6}
								key={idx}
								bg="primaxBlue"
								ml="0!important"
								minH="210px"
							>
								<Image
									src={testi.photo}
									alt={testi.photo}
									my="auto"
									mx="auto"
									w="166px"
									h="166px"
									objectFit="contain"
								/>
								<Text as="p" pl={6}>
									{testi.message}
								</Text>
							</Box>
						))}
					</HStack>

					<Button
						mt={12}
						px={16}
						py={7}
						onClick={() => handleOpenModal('testimoni')}
					>
						Lihat Selengkapnya
					</Button>
				</Container>
			</Box>

			<SectionA
				maxH="2xl"
				py={24}
				gap={16}
				alignItems="start"
				leftContent={
					<Box pos="relative">
						<Box
							pos="absolute"
							top={0}
							bottom={0}
							right={0}
							left={0}
							m="auto"
							w="80%"
							h="lg"
							bg="primaxBlue"
							zIndex={-1}
						></Box>
						<Image
							src={`${imgPath}/primaxcel-cream-produk.jpg`}
							alt="Primaxcel cream produk"
							zIndex={1}
						/>
					</Box>
				}
				rightContent={
					<Box pr="60px">
						<Text as="h3" fontSize="4xl" fontWeight="bold" color="primaxPurple">
							Bisnis skincare menjadi mudah dengan maklon bersama Primaxcel
						</Text>
						<Text as="p" mt={6}>
							Mulai bisnis skincare anda hari ini, mudah. Hubungi kami untuk
							memulai bisnis anda, maupun untuk info lebih lanjut mengenai
							maklon skincare dan household products.
						</Text>
						<Button mt={6} px={16} py={7}>
							Hubungi Kami
						</Button>
					</Box>
				}
			/>

			<ClientsDetailModal
				isOpen={isOpenModal}
				onClose={handleCloseModal}
				content={modalContent}
			/>
		</>
	);
};

const getLayout = (page) => {
	return <MainLayout>{page}</MainLayout>;
};

OurClients.getLayout = getLayout;

export default OurClients;
