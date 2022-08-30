import { useRouter } from 'next/router';
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
			<Box minH={100} bg="primaxWhite"></Box>
			<SectionB
				bg="primaxWhite"
				customSize={['60%', '40%']}
				imgWidth="60%"
				img={
					<Box width="full" zIndex={2}>
						<Image
							src="/Tube-Mockup-Primaxcel.png"
							alt="Tube-Mockup_image"
							layout="fill"
							objectFit="contain"
						/>
					</Box>
				}
				content={
					<Box width="full">
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
				pt={8}
				customSize={['65%', '35%']}
				bg="primaxWhite"
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
							src="/beauty-skincare-products-bathroom.png"
							alt="beauty-skincare-products_image"
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
				leftContent={
					<Box pos="relative" width="100%" height="612px">
						<Image
							src="/products/minimal-composition-beauty-products.png"
							alt="minimal-composition-beauty_image"
							layout="fill"
						/>
					</Box>
				}
				rightContent={
					<Box pt={24} pl={24}>
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
							src="/products/front-view-natural-self-care-products-composition.png"
							alt="front-view-natural_image"
							layout="fill"
						/>
					</Box>
				}
			/>

			<Box bg="primaxLightBlue" py={10} textAlign="center">
				<Container maxW="container.xl">
					<Text as="h2">Produk yang kami produksi</Text>

					<HStack justifyContent="space-between">
						<Box
							display="inline-block"
							my={8}
							bg="primaxBlue"
							minW="334px"
							py={8}
							px={6}
						>
							<Box pos="relative" width="100%" height="268px">
								<Image
									src="/products/beauty-skincare-products-bathroom-2.png"
									alt="skincare-bathroom_image"
									layout="fill"
								/>
							</Box>
							<Text mt={4} textAlign="center">
								Minimum MOQ & Packaging
							</Text>
						</Box>

						<Box
							display="inline-block"
							my={8}
							bg="primaxBlue"
							minW="334px"
							py={8}
							px={6}
						>
							<Box pos="relative" width="100%" height="268px">
								<Image
									src="/products/white-face-cream-tube-beauty-product-2.png"
									alt="white-face-cream_image"
									layout="fill"
								/>
							</Box>
							<Text mt={4} textAlign="center">
								Komposisi Produk & Hak Cipta
							</Text>
						</Box>

						<Box
							display="inline-block"
							my={8}
							bg="primaxBlue"
							minW="334px"
							py={8}
							px={6}
						>
							<Box pos="relative" width="100%" height="268px">
								<Image
									src="/products/top-view-hydro-alcoholic-gel-splashes-with-bottle-dispenser.png"
									alt="top-view-hydro_image"
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
