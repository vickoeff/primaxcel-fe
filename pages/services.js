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

	const imgPath = router.pathname;

	const onGoToContactForm = () => {
		router.push('/contact-us#contact-form');
	};

	return (
		<>
			<Head>
				<title>Primaxcel product category</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="description"
					content="Primaxcel menyediakan berbagai produk face care, hair and body care, dan juga produk rumah tangga. Hubungi kamu untuk mewujudkan produk impianmu."
				></meta>
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
				<meta
					property="og:image"
					content="https://primaxcel.co.id/logogram.png"
				></meta>
				<meta name="twitter:title" content="Primaxcel product category"></meta>
				<meta
					name="twitter:description"
					content="Primaxcel menyediakan berbagai produk face care, hair and body care, dan juga produk rumah tangga. Hubungi kamu untuk mewujudkan produk impianmu."
				></meta>
				<meta
					name="twitter:image"
					content="https://primaxcel.co.id/logogram.png"
				></meta>
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
								Kami menawarkan jasa OEM (Original Equipment Manufacturing), ODM
								(Original Design Manufacturing), serta private label untuk
								menghasilkan produk sesuai dengan keinginan anda.
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

							<UnorderedList mb={6} fontSize="xl" textAlign="left">
								<ListItem>Penentuan konsep produk</ListItem>
								<ListItem>Formulasi produk</ListItem>
								<ListItem>Design packaging</ListItem>
								<ListItem>Uji efektivitas sample</ListItem>
								<ListItem>Persetujuan sample</ListItem>
								<ListItem>Legalitas produk (BPOM, Halal, dll)</ListItem>
							</UnorderedList>
							<Text as="p">
								Jangan ragu ataupun bingung. Representatif kami akan membantu
								Anda dalam setiap proses, hingga memperoleh produk sesuai impian
								Anda.
							</Text>
							<Flex height="100%" alignItems="flex-end">
								<Button
									as="a"
									variant="link"
									role="link"
									onClick={onGoToContactForm}
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
							</Flex>
						</Box>

						<Box
							display="flex"
							flexDirection="column"
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

							<UnorderedList mb={6} fontSize="xl" textAlign="left">
								<ListItem>Uji stabilitas produk</ListItem>
								<ListItem>Proses produksi</ListItem>
								<ListItem>Packaging</ListItem>
							</UnorderedList>
							<Text as="p">
								Kami menjamin seluruh proses produksi dilakukan dengan standar
								nasional agar dapat menghasilkan produk berkualitas.
							</Text>
							<Flex height="100%" alignItems="flex-end">
								<Button
									as="a"
									variant="link"
									role="link"
									onClick={onGoToContactForm}
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
							</Flex>
						</Box>

						<Box
							display="flex"
							flexDirection="column"
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

							<UnorderedList mb={6} fontSize="xl" textAlign="left">
								<ListItem>Quality Control</ListItem>
								<ListItem>Delivery produk</ListItem>
								<ListItem>Periode post-delivery claim</ListItem>
							</UnorderedList>
							<Text as="p">
								Kami pastikan keamanan produk Anda sampai tiba di warehouse dan
								siap dijual. Kami akan membantu untuk mempersiapkan teknik
								marketing yang cocok dan sesuai dengan target pasar Anda.
							</Text>
							<Flex height="100%" alignItems="flex-end">
								<Button
									as="a"
									variant="link"
									role="link"
									onClick={onGoToContactForm}
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
							</Flex>
						</Box>
					</Flex>

					<Button mt={12} px={16} py={7} onClick={onGoToContactForm}>
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
							Kami mengerti Anda
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
								Sudah memiliki konsep produk impian Anda?
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
								Anda hingga siap dipasarkan.
							</Text>
							<Flex
								justifyContent={{
									base: 'center',
									md: 'flex-start',
								}}
							>
								<Button onClick={onGoToContactForm}>Hubungi Kami</Button>
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
								Jangan ragu untuk menghubungi kami. Kami bantu Anda menentukan
								konsep produk sampai produk Anda siap dipasarkan.
							</Text>
							<Flex
								justifyContent={{
									base: 'center',
									md: 'flex-start',
								}}
							>
								<Button onClick={onGoToContactForm}>Hubungi Kami</Button>
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
