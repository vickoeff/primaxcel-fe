import { useRef } from 'react';
import Head from 'next/head';
import { SectionA, MainLayout } from '@/components/Layouts';
import {
	Box,
	Container,
	Text,
	UnorderedList,
	ListItem,
	Flex,
	Button,
	Image as ImageChakra,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Services = () => {
	const router = useRouter();

	const handleServicesDetail = () => {
		router.push(`${router.pathname}/category`);
	};

	const imgPath = router.pathname;

	return (
		<>
			<Head>
				<title>Primaxcel product category</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="description"
					content="Primaxcel menyediakan berbagai produk face care, hair and body care, dan juga produk rumah tangga. Hubungi kamu untuk mewujudkan produk impianmu."
				></meta>
				<meta name="robots" content="index,follow"></meta>
				<meta name="googlebot" content="index,follow"></meta>
				<meta property="og:type" content="website"></meta>
				<meta
					property="og:url"
					content="https://primaxcelinovasi.co.id/services"
				></meta>
				<meta property="og:title" content="Primaxcel product category"></meta>
				<meta
					property="og:description"
					content="Primaxcel menyediakan berbagai produk face care, hair and body care, dan juga produk rumah tangga. Hubungi kamu untuk mewujudkan produk impianmu."
				></meta>
				{/* <meta property="og:image" content="LINK TO IMAGE"></meta> */}
				<meta name="twitter:title" content="Primaxcel product category"></meta>
				<meta
					name="twitter:description"
					content="Primaxcel menyediakan berbagai produk face care, hair and body care, dan juga produk rumah tangga. Hubungi kamu untuk mewujudkan produk impianmu."
				></meta>
				{/* <meta name="twitter:image" content="LINK TO IMAGE"></meta> */}
				<meta name="twitter:site" content="@primaxcel_inv"></meta>
				<meta name="twitter:creator" content="@primaxcel_inv"></meta>
			</Head>
			<SectionA
				pt={{
					base: '57px',
					md: '65px',
				}}
				bg="primaxWhite"
				containerWidth={{
					base: '100%',
					'2xl': '1280px',
				}}
				containerPadding="0"
				isFitContent
				leftContent={
					<Box
						pos="relative"
						width="100%"
						height={{
							base: '500px',
							md: '723px',
						}}
						opacity={{
							base: '0.3',
							md: '1',
						}}
					>
						<Image
							src={imgPath + '/face-scrub.jpg'}
							alt="Face scrub produk"
							layout="fill"
							objectFit="cover"
						/>
					</Box>
				}
				rightContent={
					<Box
						display="flex"
						bg={{
							base: 'none',
							md: 'primaxLightBlue',
						}}
						alignItems="center"
						justifyContent="center"
						height={{
							base: 'auto',
							md: '723px',
						}}
						pos={{
							base: 'absolute',
							md: 'relative',
						}}
						top={{
							base: '100px',
							md: 'auto',
						}}
						left={{
							base: '50%',
							md: 'auto',
						}}
						transform={{
							base: 'translate(-50%, 0)',
							md: 'none',
						}}
					>
						<Box width="400px">
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
					backgroundImage: `url(${imgPath}/produk-beauty-modern.jpg)`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundColor: '#9FE0E945',
				}}
				position="relative"
			>
				<Box
					position="absolute"
					top="0"
					left="0"
					right="0"
					bottom="0"
					bg="primaxBlue"
					opacity="0.5"
					zIndex={1}
				></Box>
				<Container
					maxW="container.xl"
					py={10}
					textAlign="center"
					zIndex={2}
					position="relative"
				>
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
					<Flex
						gap={6}
						flexDirection={{
							base: 'column',
							md: 'row',
						}}
					>
						<Box
							display="flex"
							flexDirection="column"
							justifyContent={{
								base: 'flex-start',
								md: 'space-between',
							}}
							flex={1}
							minH={{
								base: '0',
								md: '635px',
							}}
							p={10}
							bg="primaxWhite"
							boxShadow="4px 18px 24px #00000064"
						>
							<Text as="h3" mb={4} color="primaxPurple" fontSize="2xl">
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
								textAlign="left"
								display="flex"
								justifyContent="flex-start"
							>
								<Text
									as="p"
									fontWeight="semibold"
									m="0"
									textDecoration="underline"
								>
									Informasi lebih lengkap
								</Text>
							</Button>
						</Box>

						<Box
							display="flex"
							flexDirection="column"
							justifyContent={{
								base: 'flex-start',
								md: 'space-between',
							}}
							flex={1}
							minH={{
								base: '0',
								md: '635px',
							}}
							p={10}
							bg="primaxWhite"
							boxShadow="4px 18px 24px #00000064"
						>
							<Text as="h3" mb={4} color="primaxPurple" fontSize="2xl">
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
								textAlign="left"
								display="flex"
								justifyContent="flex-start"
							>
								<Text
									as="p"
									fontWeight="semibold"
									m="0"
									textDecoration="underline"
								>
									Informasi lebih lengkap
								</Text>
							</Button>
						</Box>

						<Box
							display="flex"
							flexDirection="column"
							justifyContent={{
								base: 'flex-start',
								md: 'space-between',
							}}
							flex={1}
							minH={{
								base: '0',
								md: '635px',
							}}
							p={10}
							bg="primaxWhite"
							boxShadow="4px 18px 24px #00000064"
						>
							<Text as="h3" mb={4} color="primaxPurple" fontSize="2xl">
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
								textAlign="left"
								display="flex"
								justifyContent="flex-start"
							>
								<Text
									as="p"
									fontWeight="semibold"
									m="0"
									textDecoration="underline"
								>
									Informasi lebih lengkap
								</Text>
							</Button>
						</Box>
					</Flex>

					<Button mt={12} px={16} py={7}>
						Hubungi Kami
					</Button>
				</Container>
			</Box>

			<Box
				bg="primaxWhite"
				pt={16}
				pb={24}
				px={{
					base: '16px',
					md: '60px',
				}}
				maxW={{
					base: '100%',
					xl: '1280px',
				}}
				margin="0 auto"
			>
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
				<Flex
					justifyContent="space-between"
					flexDirection={{
						base: 'column',
						md: 'row',
					}}
				>
					<Flex
						height="250px"
						width={{
							base: '100%',
							md: 'calc((100% / 3) - 8px)',
						}}
						overflow="hidden"
					>
						<ImageChakra
							src="/services/fasilitas-produksi-primaxcel-1.jpg"
							w="100%"
							h="100%"
							objectFit="cover"
						></ImageChakra>
					</Flex>
					<Flex
						height="250px"
						width={{
							base: '100%',
							md: 'calc((100% / 3) - 8px)',
						}}
						overflow="hidden"
						mt={{
							base: '20px',
							md: '0',
						}}
					>
						<ImageChakra
							src="/services/fasilitas-produksi-primaxcel-2.jpg"
							w="100%"
							h="100%"
							objectFit="cover"
						></ImageChakra>
					</Flex>
					<Flex
						height="250px"
						width={{
							base: '100%',
							md: 'calc((100% / 3) - 8px)',
						}}
						overflow="hidden"
						mt={{
							base: '20px',
							md: '0',
						}}
					>
						<ImageChakra
							src="/services/fasilitas-produksi-primaxcel-3.jpg"
							w="100%"
							h="100%"
							objectFit="cover"
						></ImageChakra>
					</Flex>
				</Flex>
				<Flex
					justifyContent="space-between"
					mt={{
						base: '20px',
						md: '100px',
					}}
					flexDirection={{
						base: 'column',
						md: 'row',
					}}
				>
					<Flex
						height="250px"
						width={{
							base: '100%',
							md: 'calc((100% / 3) - 8px)',
						}}
						overflow="hidden"
					>
						<ImageChakra
							src="/services/fasilitas-produksi-primaxcel-4.jpg"
							w="100%"
							h="100%"
							objectFit="cover"
						></ImageChakra>
					</Flex>
					<Flex
						height="250px"
						width={{
							base: '100%',
							md: 'calc((100% / 3) - 8px)',
						}}
						overflow="hidden"
						mt={{
							base: '20px',
							md: '0',
						}}
					>
						<ImageChakra
							src="/services/fasilitas-produksi-primaxcel-5.jpg"
							w="100%"
							h="100%"
							objectFit="cover"
						></ImageChakra>
					</Flex>
					<Flex
						height="250px"
						width={{
							base: '100%',
							md: 'calc((100% / 3) - 8px)',
						}}
						overflow="hidden"
						mt={{
							base: '20px',
							md: '0',
						}}
					>
						<ImageChakra
							src="/services/fasilitas-produksi-primaxcel-6.jpg"
							w="100%"
							h="100%"
							objectFit="cover"
						></ImageChakra>
					</Flex>
				</Flex>
			</Box>

			<SectionA
				bg="primaxLightBlue"
				customSize={['50%', '50%']}
				containerWidth={{
					base: '100%',
					xl: '1280px',
				}}
				containerPadding={{
					base: '40px 0 0',
					md: '0 0 0 60px',
				}}
				leftContent={
					<>
						<Text
							as="h2"
							mb={6}
							color="primaxPurple"
							textAlign={{
								base: 'center',
								md: 'left',
							}}
						>
							Kami mengerti anda
						</Text>
						<Box
							mb={16}
							minH="full"
							pr={{
								base: 0,
								md: 8,
							}}
						>
							<Text
								as="h3"
								fontSize="2xl"
								fontWeight="bold"
								color="primaxPurple"
								mb={4}
								textAlign={{
									base: 'center',
									md: 'left',
								}}
								w={{
									base: 'calc(100% - 32px)',
									md: '100%',
								}}
								margin="0 auto"
							>
								Sudah memiliki konsep produk impian anda?
							</Text>
							<Text
								as="p"
								textAlign={{
									base: 'center',
									md: 'left',
								}}
								w={{
									base: 'calc(100% - 32px)',
									md: '100%',
								}}
								mx="auto"
							>
								Ceritakan kepada kami sekarang. Kami bantu kembangkan produk
								anda hingga siap dipasarkan.
							</Text>
							<Flex
								justifyContent={{
									base: 'center',
									md: 'flex-start',
								}}
							>
								<Button>Hubungi Kami</Button>
							</Flex>
						</Box>
						<Box
							mb={16}
							pr={{
								base: 0,
								md: 8,
							}}
							minH="full"
						>
							<Text
								as="h3"
								fontSize="2xl"
								fontWeight="bold"
								color="primaxPurple"
								textAlign={{
									base: 'center',
									md: 'left',
								}}
								w={{
									base: 'calc(100% - 32px)',
									md: '100%',
								}}
								margin="0 auto"
							>
								Masih bingung ingin membuat produk seperti apa?
							</Text>
							<Text
								as="p"
								textAlign={{
									base: 'center',
									md: 'left',
								}}
								w={{
									base: 'calc(100% - 32px)',
									md: '100%',
								}}
								mx="auto"
							>
								Jangan ragu untuk menghubungi kami. Kami bantu anda menentukan
								konsep produk sampai produk anda siap dipasarkan.
							</Text>
							<Flex
								justifyContent={{
									base: 'center',
									md: 'flex-start',
								}}
							>
								<Button>Hubungi Kami</Button>
							</Flex>
						</Box>
					</>
				}
				rightContent={
					<Box pos="relative" width="100%" height="456px">
						<Image
							src="/services/produk-natural-self-care.jpg"
							alt="Primaxcel natural self care produk"
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
