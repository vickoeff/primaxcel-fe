import { useRouter } from 'next/router';
import Head from 'next/head';
import { Container, Box, Text, Button, HStack } from '@chakra-ui/react';
import { SectionA, SectionB } from '@/components/Layouts';
import Image from 'next/image';
import { MainLayout } from '@/components/Layouts';

const Products = () => {
	const router = useRouter();

	const handleProductDetail = (_, path) => {
		router.push(`${router.pathname}/category#${path}`);
	};

	return (
		<>
			<Head>
				<title>Explore our beauty products</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="description"
					content="Primaxcel adalah produsen produk face care, hair and body care, dan juga produk rumah tangga. Kami selalu menjaga kualitas produk produk yang kami produksi."
				></meta>
				<meta name="robots" content="index,follow"></meta>
				<meta name="googlebot" content="index,follow"></meta>
				<meta property="og:type" content="website"></meta>
				<meta
					property="og:url"
					content="https://primaxcelinovasi.co.id/products"
				></meta>
				<meta property="og:title" content="Primaxcel beauty products"></meta>
				<meta
					property="og:description"
					content="Kami adalah produsen produk kecantikan seperti face care, hair and body care, dan juga produk produk rumah tangga. Kami akan mewujudkan produk impian anda."
				></meta>
				{/* <meta property="og:image" content="LINK TO IMAGE"></meta> */}
				<meta name="twitter:title" content="Primaxcel beauty products"></meta>
				<meta
					name="twitter:description"
					content="Kami adalah produsen produk kecantikan seperti face care, hair and body care, dan juga produk produk rumah tangga. Kami akan mewujudkan produk impian anda."
				></meta>
				{/* <meta name="twitter:image" content="LINK TO IMAGE"></meta> */}
				{/* <meta name="twitter:site" content="@USERNAME"></meta>
				<meta name="twitter:creator" content="@USERNAME"></meta> */}
			</Head>
			<Box minH={100} bg="primaxWhite"></Box>
			<SectionB
				bg="primaxWhite"
				imgWidth="60%"
				containerWidth="100%"
				containerPadding="0"
				img={
					<Box
						width="full"
						zIndex={2}
						height="100%"
						ml="-24px"
						position="relative"
					>
						<Image
							src="/products/produk-primaxcel.png"
							alt="Produk primaxcel"
							layout="fill"
							objectFit="contain"
						/>
					</Box>
				}
				content={
					<Box width="full" marginLeft="160px">
						<Text
							as="h1"
							fontSize="6xl"
							fontWeight={700}
							color="primaxDarkPurple"
						>
							Produk Kami
						</Text>
					</Box>
				}
			/>

			<SectionA
				customSize={['65%', '35%']}
				bg="primaxWhite"
				containerWidth="100%"
				containerPadding="0 0 0 120px"
				leftContent={
					<Box mr="6" maxW="60%" pb={24}>
						<Text as="h2" mb={6}>
							Face Care
						</Text>
						<Text as="p" mb={6}>
							Buat produk perawatan wajah sesuai yang anda inginkan dengan
							kualitas tinggi. Kami bisa membantu anda membuat rangkaian
							perawatan wajah sesuai keinginan anda, hingga siap dipasarkan.
							Dengan kualitas tinggi dan harga yang bisa bersaing.
						</Text>
						<Button
							as="a"
							variant="link"
							role="link"
							onClick={(event) => handleProductDetail(event, 'face-care')}
						>
							<Text as="p" fontWeight="semibold">
								Lebih lengkap...
							</Text>
						</Button>
					</Box>
				}
				rightContent={
					<Box pos="relative" width="100%" height="723px">
						<Image
							src="/products/produk-skin-care-primaxcel.jpg"
							alt="Produk skin care primaxcel"
							layout="fill"
						/>
					</Box>
				}
			/>

			<SectionA
				mt="-8px"
				isFitContent
				bg="primaxLightBlue"
				customSize={['45%', '55%']}
				containerWidth="100%"
				containerPadding="0"
				leftContent={
					<Box pos="relative" width="100%" height="612px">
						<Image
							src="/products/produk-hair-and-body-care.jpg"
							alt="Produk hair and body care primaxcel"
							layout="fill"
						/>
					</Box>
				}
				rightContent={
					<Box pt={16} pl={24} pr={40}>
						<Text as="h2" mb={6}>
							Hair & Body Care
						</Text>
						<Text as="p" mb={6}>
							Buat produk perawatan rambut & tubuh tubuh sesuai yang anda
							inginkan dengan kualitas tinggi. Kami bisa membantu anda membuat
							rangkaian perawatan rambut & tubuh sesuai keinginan anda, hingga
							siap dipasarkan. Dengan kualitas tinggi dan harga yang bisa
							bersaing.
						</Text>
						<Button
							as="a"
							variant="link"
							role="link"
							onClick={(event) => handleProductDetail(event, 'hair-and-body')}
						>
							<Text as="p" fontWeight="semibold">
								Lebih lengkap...
							</Text>
						</Button>
					</Box>
				}
			/>

			<SectionA
				mt="-8px"
				isFitContent
				customSize={['65%', '35%']}
				bg="primaxWhite"
				containerWidth="100%"
				containerPadding="0 0 0 120px"
				leftContent={
					<Box mr="6" maxW="60%" pt={24}>
						<Text as="h2" mb={6}>
							Produk Rumah Tangga
						</Text>
						<Text as="p" mb={6}>
							Buat produk rumah tangga sesuai yang anda inginkan untuk komersial
							maupun korporasi dengan kualitas tinggi. Kami bisa membantu anda
							membuat produk sesuai kebutuhan dengan kualitas tinggi.
						</Text>
						<Button
							as="a"
							variant="link"
							role="link"
							onClick={(event) => handleProductDetail(event, 'household')}
						>
							<Text as="p" fontWeight="semibold">
								Lebih lengkap...
							</Text>
						</Button>
					</Box>
				}
				rightContent={
					<Box pos="relative" width="100%" height="723px">
						<Image
							src="/products/produk-rumah-tangga.jpg"
							alt="Produk rumah tangga primaxcel"
							layout="fill"
						/>
					</Box>
				}
			/>

			<Box bg="primaxLightBlue" py={10} textAlign="center">
				<Container maxW="container.xl">
					<Text as="h2">Tanya kami</Text>

					<HStack justifyContent="space-between" mt="32px">
						<Box
							display="inline-block"
							bg="primaxBlue"
							w="334px"
							h="396px"
							pt="26px"
							px="40px"
						>
							<Box pos="relative" width="100%" height="268px">
								<Image
									src="/products/paket-kecantikan.jpg"
									alt="Paket kecantikan"
									layout="fill"
								/>
							</Box>
							<Text mt={4} textAlign="center">
								Minimum MOQ & Packaging
							</Text>
						</Box>

						<Box
							display="inline-block"
							bg="primaxBlue"
							w="334px"
							h="396px"
							pt="26px"
							px="40px"
						>
							<Box pos="relative" width="100%" height="268px">
								<Image
									src="/products/hydro-alcoholic-gel.jpg"
									alt="Hydro alcholic gel"
									layout="fill"
								/>
							</Box>
							<Text mt={4} textAlign="center">
								Komposisi Produk & Hak Cipta
							</Text>
						</Box>

						<Box
							display="inline-block"
							bg="primaxBlue"
							w="334px"
							h="396px"
							pt="26px"
							px="40px"
						>
							<Box pos="relative" width="100%" height="268px">
								<Image
									src="/products/krim-pemutih-wajah.jpg"
									alt="Krim pemutih wajah"
									layout="fill"
								/>
							</Box>
							<Text mt={4} textAlign="center">
								Lainnya
							</Text>
						</Box>
					</HStack>
				</Container>
			</Box>
		</>
	);
};

const getLayout = (page) => {
	return <MainLayout>{page}</MainLayout>;
};

Products.getLayout = getLayout;

export default Products;
