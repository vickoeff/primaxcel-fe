import { useRouter } from 'next/router';
import Head from 'next/head';
import { Container, Box, Text, Button, HStack } from '@chakra-ui/react';
import { SectionA, SectionB } from '@/components/Layouts';
import Image from 'next/image';
import { MainLayout } from '@/components/Layouts';
import { ASK_US_CONTENT } from '@/constant/products';

const Products = () => {
	const router = useRouter();

	const handleProductDetail = (_, path) => {
		router.push(`${router.pathname}/category#${path}`);
	};

	const onGoToFaq = () => {
		router.push('/faq');
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
				<meta name="twitter:site" content="@primaxcel_inv"></meta>
				<meta name="twitter:creator" content="@primaxcel_inv"></meta>
			</Head>
			<Box
				minH={{
					base: '57px',
					md: '65px',
				}}
			></Box>
			<SectionB
				bg="primaxWhite"
				minH={{
					base: '500px',
					md: '2xl',
				}}
				imgWidth={{
					base: '100%',
					md: '60%',
				}}
				containerWidth="100%"
				containerPadding="0"
				img={
					<Box
						width="full"
						zIndex={2}
						height="100%"
						ml={{
							base: '0',
							md: '-24px',
						}}
						top={{
							base: '75px',
							md: 'auto',
						}}
						position="relative"
					>
						<Image
							src="/products/produk-primaxcel.png"
							alt="Produk primaxcel"
							layout="fill"
							objectFit="contain"
							w="100%"
							h="100%"
						/>
					</Box>
				}
				content={
					<Box
						w={{
							base: '250px',
							lg: '400px',
						}}
						textAlign="center"
						marginLeft={{
							base: '0',
							md: '80px',
							lg: '120px',
						}}
						position={{
							base: 'absolute',
							md: 'relative',
						}}
						top={{
							base: '55px',
							md: 'auto',
						}}
						left={{
							base: '50%',
							md: 'auto',
						}}
						transform={{
							base: 'translate(-50%, 0%)',
							md: 'none',
						}}
					>
						<Text
							as="h1"
							fontSize={{
								base: '4xl',
								lg: '6xl',
							}}
							fontWeight={700}
							color="primaxDarkPurple"
						>
							Produk Kami
						</Text>
					</Box>
				}
			/>

			<SectionA
				isFitContent
				customSize={['65%', '35%']}
				bg="primaxWhite"
				containerWidth={{
					base: '100%',
					xl: '1280px',
				}}
				containerPadding={{
					base: '0',
					md: '0 0 0 80px',
					lg: '0 0 0 120px',
					xl: '0 0 0 80px',
					'2xl': '0',
				}}
				leftContent={
					<Box
						mr={{
							base: 0,
							md: 6,
						}}
						maxW={{
							base: '100%',
							md: '80%',
							xl: '60%',
						}}
						pos="relative"
						py={{
							base: '40px',
							md: '0',
						}}
						px={{
							base: '16px',
							md: '0',
						}}
					>
						<Text
							as="h2"
							mb={6}
							textAlign={{
								base: 'center',
								md: 'left',
							}}
						>
							Face Care
						</Text>
						<Text as="p" mb={6}>
							Ciptakan produk perawatan wajah sesuai yang Anda inginkan dengan
							kualitas terbaik. Kami dapat membantu Anda membuat rangkaian
							perawatan wajah dan tubuh hingga siap dipasarkan, tentunya dengan
							harga yang bersaing dipasaran.
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
					<Box
						pos="relative"
						width="100%"
						display={{
							base: 'none',
							md: 'block',
						}}
						height="400px"
					>
						<Image
							src="/products/produk-skin-care-primaxcel.jpg"
							alt="Produk skin care primaxcel"
							layout="fill"
							objectFit="cover"
						/>
					</Box>
				}
			/>

			<SectionA
				isFitContent
				bg="primaxLightBlue"
				customSize={['45%', '55%']}
				containerWidth={{
					base: '100%',
					xl: '1280px',
				}}
				containerPadding={{
					base: '0',
					md: '0 80px 0 0',
					lg: '0 120px 0 0',
					xl: '0 80 0 0',
					'2xl': '0',
				}}
				leftContent={
					<Box
						pos="relative"
						width="100%"
						display={{
							base: 'none',
							md: 'block',
						}}
						height="450px"
					>
						<Image
							src="/products/produk-hair-and-body-care.jpg"
							alt="Produk hair and body care primaxcel"
							layout="fill"
							objectFit="cover"
						/>
					</Box>
				}
				rightContent={
					<Box
						py={{
							base: '40px',
							md: '0',
						}}
						px={{
							base: '16px',
							md: '0',
						}}
						ml={{
							base: 0,
							md: 24,
						}}
					>
						<Text
							as="h2"
							mb={6}
							textAlign={{
								base: 'center',
								md: 'left',
							}}
						>
							Hair & Body Care
						</Text>
						<Text as="p" mb={6}>
							Ciptakan produk perawatan rambut dan tubuh dengan kualitas terbaik
							yang sesuai dengan harapan Anda. Kami berkomitmen membantu Anda
							untuk membuat formulasi terbaik dengan harga yang bersaing, hingga
							produk Anda siap untuk dipasarkan.
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
				isFitContent
				customSize={['65%', '35%']}
				bg="primaxWhite"
				containerWidth={{
					base: '100%',
					xl: '1280px',
				}}
				containerPadding={{
					base: '0',
					md: '0 0 0 80px',
					lg: '0 0 0 120px',
					xl: '0 0 0 80px',
					'2xl': '0',
				}}
				leftContent={
					<Box
						mr={{
							base: 0,
							md: 6,
						}}
						maxW={{
							base: '100%',
							md: '80%',
							xl: '60%',
						}}
						pos="relative"
						py={{
							base: '40px',
							md: '0',
						}}
						px={{
							base: '16px',
							md: '0',
						}}
					>
						<Text
							as="h2"
							mb={6}
							textAlign={{
								base: 'center',
								md: 'left',
							}}
						>
							Household Product
						</Text>
						<Text as="p" mb={6}>
							Ciptakan produk rumah tangga sesuai dengan yang Anda inginkan,
							baik untuk keperluan komersial maupun korporasi. Kami siap untuk
							memberikan pelayanan dan kualitas produk terbaik sesuai harapan
							Anda.
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
					<Box
						pos="relative"
						width="100%"
						display={{
							base: 'none',
							md: 'block',
						}}
						height="400px"
					>
						<Image
							src="/products/produk-rumah-tangga.jpg"
							alt="Produk rumah tangga primaxcel"
							layout="fill"
							objectFit="cover"
						/>
					</Box>
				}
			/>

			<Box bg="primaxLightBlue" py={10} textAlign="center">
				<Container maxW="container.xl">
					<Text as="h2">Tanya kami</Text>

					<HStack
						justifyContent="space-between"
						mt="32px"
						flexDirection={{
							base: 'column',
							lg: 'row',
						}}
					>
						{ASK_US_CONTENT.map((content, index) => (
							<Box
								display="inline-block"
								bg="primaxBlue"
								w="334px"
								h="396px"
								pt="26px"
								px="40px"
								mt={4}
								ml="0 !important"
								key={`ask-us-content-${index}`}
								cursor="pointer"
								onClick={onGoToFaq}
							>
								<Box pos="relative" width="100%" height="268px">
									<Image src={content.image} alt={content.alt} layout="fill" />
								</Box>
								<Text mt={4} textAlign="center">
									{content.title}
								</Text>
							</Box>
						))}
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
