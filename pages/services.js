import { useRef } from 'react';
import { SectionA, MainLayout } from '@/components/Layouts';
import {
	Box,
	Container,
	Text,
	UnorderedList,
	ListItem,
	HStack,
	Button,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { ProGallery } from 'pro-gallery';

const Services = () => {
	const router = useRouter();
	const galleryEl = useRef(null);

	const handleServicesDetail = () => {
		router.push(`${router.pathname}/skin-care`);
	};

	const imgPath = router.pathname;

	// Gallery

	// Add your images here...
	const items = [
		{
			// Image item:
			itemId: '1',
			mediaUrl: imgPath + '/1.png',
			metaData: {
				type: 'image',
				height: 300,
				width: 100,
				title: 'sample-title',
				description: 'sample-description',
				focalPoint: [0, 0],
				link: {
					url: imgPath + '/1.png',
					target: '_blank',
				},
			},
		},
		{
			// Another Image item:
			itemId: '2',
			mediaUrl: imgPath + '/2.png',
			metaData: {
				type: 'image',
				height: 200,
				width: 100,
				title: 'sample-title',
				description: 'sample-description',
				focalPoint: [0, 0],
				link: {
					url: 'http://example.com',
					target: '_blank',
				},
			},
		},
		{
			// Another Image item:
			itemId: '3',
			mediaUrl: imgPath + '/3.png',
			metaData: {
				type: 'image',
				height: 200,
				width: 100,
				title: 'sample-title',
				description: 'sample-description',
				focalPoint: [0, 0],
				link: {
					url: 'http://example.com',
					target: '_blank',
				},
			},
		},
		{
			// Another Image item:
			itemId: '4',
			mediaUrl: imgPath + '/4.png',
			metaData: {
				type: 'image',
				height: 200,
				width: 100,
				title: 'sample-title',
				description: 'sample-description',
				focalPoint: [0, 0],
				link: {
					url: 'http://example.com',
					target: '_blank',
				},
			},
		},
		{
			// Another Image item:
			itemId: '5',
			mediaUrl: imgPath + '/5.png',
			metaData: {
				type: 'image',
				height: 200,
				width: 100,
				title: 'sample-title',
				description: 'sample-description',
				focalPoint: [0, 0],
				link: {
					url: 'http://example.com',
					target: '_blank',
				},
			},
		},
		{
			// Another Image item:
			itemId: '6',
			mediaUrl: imgPath + '/6.png',
			metaData: {
				type: 'image',
				height: 200,
				width: 100,
				title: 'sample-title',
				description: 'sample-description',
				focalPoint: [0, 0],
				link: {
					url: 'http://example.com',
					target: '_blank',
				},
			},
		},
	];

	// The options of the gallery (from the playground current state)
	const options = {
		layoutParams: {
			structure: {
				galleryLayout: 2,
			},
		},
		behaviourParams: {
			item: {
				content: {
					hoverAnimation: 'SHRINK',
				},
				clickAction: 'ACTION',
			},
		},
	};

	// The size of the gallery container. The images will fit themselves in it
	const container = {
		width: 990,
		height: 500,
	};

	// The eventsListener will notify you anytime something has happened in the gallery.
	const eventsListener = (eventName, eventData) =>
		console.log({ eventName, eventData });

	// The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
	const scrollingElement = galleryEl;

	return (
		<>
			<SectionA
				pt={20}
				bg="primaxWhite"
				leftContent={
					<Box pos="relative" width="100%" height="723px">
						<Image
							src={imgPath + '/banner-services.png'}
							alt="banner-services_image"
							layout="fill"
						/>
					</Box>
				}
				rightContent={
					<Box
						display="flex"
						bg="primaxLightBlue"
						alignItems="center"
						height="723px"
					>
						<Box minH="sm" maxW="lg" p={10}>
							<Text
								as="h1"
								mb={4}
								color="primaxPurple"
								fontSize="4xl"
								fontWeight={700}
							>
								Our Services
							</Text>
							<Text as="p">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur.
							</Text>
							<Text as="p">
								Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur.
							</Text>
						</Box>
					</Box>
				}
			/>

			<Box
				style={{
					backgroundImage: `url(${imgPath}/modern-beauty-products-recipients-arrangement.png)`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundColor: '#9FE0E945',
				}}
			>
				<Container maxW="container.xl" py={10} textAlign="center">
					<Text
						as="h2"
						color="primaxPurple"
						fontSize="5xl"
						fontWeight="bold"
						textAlign="center"
						mb={12}
					>
						Tahapan Maklon
					</Text>
					<HStack gap={6}>
						<Box
							display="flex"
							flexDirection="column"
							justifyContent="space-between"
							flex={1}
							minH="635px"
							p={10}
							bg="primaxWhite"
							boxShadow="4px 18px 24px #00000064"
						>
							<Text as="h1" mb={4} color="primaxPurple" fontSize="2xl">
								Pre-production service
							</Text>

							<UnorderedList mb={6} minH="160px" fontSize="xl" textAlign="left">
								<ListItem>Penentuan konsep produk</ListItem>
								<ListItem>Formulasi produk</ListItem>
								<ListItem>Design packaging</ListItem>
								<ListItem>Uji efektivitas sample</ListItem>
								<ListItem>Persetujuan sample</ListItem>
								<ListItem>Legalitas produk</ListItem>
							</UnorderedList>
							<Text as="p">
								Jangan ragu maupun bingung representatif kami akan membantu Anda
								dalam setiap proses, sampai memperoleh produk sesuai impian Anda
							</Text>

							<Button
								as="a"
								variant="link"
								role="link"
								onClick={handleServicesDetail}
							>
								<Text as="p" fontWeight="semibold">
									Informasi lebih lengkap
								</Text>
							</Button>
						</Box>

						<Box
							display="flex"
							flexDirection="column"
							justifyContent="space-between"
							flex={1}
							minH="635px"
							p={10}
							bg="primaxWhite"
							boxShadow="4px 18px 24px #00000064"
						>
							<Text as="h1" mb={4} color="primaxPurple" fontSize="2xl">
								Production
							</Text>

							<UnorderedList minH="160px" mb={6} fontSize="xl" textAlign="left">
								<ListItem>Uji stabilitas produk</ListItem>
								<ListItem>Sertifikasi BPOM, Halal, dll</ListItem>
								<ListItem>Packing</ListItem>
								<ListItem>Quality Control</ListItem>
							</UnorderedList>

							<Text as="p">
								Kami menjamin seluruh proses menjaga keamanan dan kehalalan
								produk. Semua proses dilakukan sesuai standarisasi nasional dan
								internasional. Terikat secara legal.
							</Text>

							<Button
								as="a"
								variant="link"
								role="link"
								onClick={handleServicesDetail}
							>
								<Text as="p" fontWeight="semibold">
									Informasi lebih lengkap
								</Text>
							</Button>
						</Box>

						<Box
							display="flex"
							flexDirection="column"
							justifyContent="space-between"
							flex={1}
							minH="635px"
							p={10}
							bg="primaxWhite"
							boxShadow="4px 18px 24px #00000064"
						>
							<Text as="h1" mb={4} color="primaxPurple" fontSize="2xl">
								Post-production service
							</Text>

							<UnorderedList mb={6} minH="160px" fontSize="xl" textAlign="left">
								<ListItem>Penentuan konsep produk</ListItem>
								<ListItem>Formulasi produk</ListItem>
								<ListItem>Design packaging</ListItem>
								<ListItem>Uji efektivitas sample</ListItem>
								<ListItem>Persetujuan sample</ListItem>
								<ListItem>Legalitas produk</ListItem>
							</UnorderedList>
							<Text as="p">
								Kami pastikan keamanan produk Anda sampai tiba di warehouse, dan
								siap dijual. Kami juga siap membantu anda untuk mempersiapkan
								teknik marketing yang cocok dan sesuai dengan target pasar anda.
								Informasi lebih lengkap
							</Text>

							<Button
								as="a"
								variant="link"
								role="link"
								onClick={handleServicesDetail}
							>
								<Text as="p" fontWeight="semibold">
									Informasi lebih lengkap
								</Text>
							</Button>
						</Box>
					</HStack>

					<Button mt={12} px={16} py={7}>
						Hubungi Kami
					</Button>
				</Container>
			</Box>

			<Box bg="primaxWhite">
				<Container maxW="container.xl" py={10} pb={20} textAlign="center">
					<Text
						as="h2"
						color="primaxPurple"
						fontSize="5xl"
						fontWeight="bold"
						textAlign="center"
						mb={12}
					>
						Fasilitas Produksi Primaxcel
					</Text>

					<Box display="flex" justifyContent="center" ref={galleryEl}>
						<ProGallery
							items={items}
							options={options}
							container={container}
							eventsListener={eventsListener}
							scrollingElement={scrollingElement}
						/>
					</Box>
				</Container>
			</Box>

			<SectionA
				bg="primaxLightBlue"
				customSize={['50%', '50%']}
				leftContent={
					<>
						<Text as="h2" mb={6} color="primaxPurple">
							Kami mengerti anda
						</Text>
						<Box pr={8} mb={16} minH="full">
							<Text
								as="h3"
								fontSize="2xl"
								fontWeight="bold"
								color="primaxPurple"
								mb={4}
							>
								Sudah memiliki konsep produk impian anda?
							</Text>
							<Text as="p">
								Ceritakan kepada kami sekarang. Kami bantu kembangkan produk
								anda hingga siap dipasarkan.
							</Text>
							<Button>Hubungi Kami</Button>
						</Box>
						<Box pr={8} my={16} minH="full">
							<Text
								as="h3"
								fontSize="2xl"
								fontWeight="bold"
								color="primaxPurple"
							>
								Masih bingung ingin membuat produk seperti apa?
							</Text>
							<Text as="p">
								Jangan ragu untuk menghubungi kami. Kami bantu anda menentukan
								konsep produk sampai produk anda siap dipasarkan.
							</Text>
							<Button>Hubungi Kami</Button>
						</Box>
					</>
				}
				rightContent={
					<Box pos="relative" width="100%" height="456px">
						<Image
							src={`${imgPath}/flat-lay-natural-self-care-products-composition.png`}
							alt="flat-lay-natural-self-care-products-composition"
							layout="fill"
						/>
					</Box>
				}
			/>
		</>
	);
};

const getLayout = (page) => {
	return <MainLayout>{page}</MainLayout>;
};

Services.getLayout = getLayout;

export default Services;
