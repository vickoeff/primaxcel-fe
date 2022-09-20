import { useState, useMemo, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { SectionA } from '@/components/Layouts';
import {
	Box,
	Container,
	HStack,
	Text,
	Image,
	Button,
	Flex,
	useToast,
	Skeleton,
} from '@chakra-ui/react';
import ClientsDetailModal from '@/components/ClientsDetailModal';
import services from '@/services';
import ProductCard from '@/components/ProductCard';

// import static image
import { MainLayout } from '../components/Layouts';

const OurClients = () => {
	const toast = useToast();
	const [isOpenModal, setOpenModal] = useState(false);
	const [modalCategory, setModalCategory] = useState('');
	const [reviews, setReviews] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();
	const [householdProduct, setHouseholdProduct] = useState([]);
	const [isHouseholdProductLoading, setIsHouseholdProductLoading] =
		useState(true);
	const [skinCareProduct, setSkinCareProduct] = useState([]);
	const [isSkinCareProductLoading, setIsSkinCareProductLoading] =
		useState(true);

	const imgPath = router.pathname;

	const onGoToContactForm = () => {
		router.push('/contact-us#contact-form');
	};

	useEffect(() => {
		const getHouseholdProduct = async () => {
			try {
				setIsHouseholdProductLoading(true);

				const response = await services.getProducts({
					limit: 30,
					page: 1,
					type: 'household',
				});

				if (response && response.status && response.data) {
					setHouseholdProduct(response.data.data);
				}
			} catch (error) {
				toast({
					position: 'top',
					description: 'Failed to get household product',
					status: 'error',
					duration: 3000,
				});
			} finally {
				setIsHouseholdProductLoading(false);
			}
		};

		getHouseholdProduct();
	}, []);

	useEffect(() => {
		const getSkinCareProduct = async () => {
			try {
				setIsSkinCareProductLoading(true);

				const response = await services.getProducts({
					limit: 30,
					page: 1,
					type: 'skincare',
				});

				if (response && response.status && response.data) {
					setSkinCareProduct(response.data.data);
				}
			} catch (error) {
				toast({
					position: 'top',
					description: 'Failed to get skin care product',
					status: 'error',
					duration: 3000,
				});
			} finally {
				setIsSkinCareProductLoading(false);
			}
		};

		getSkinCareProduct();
	}, []);

	useEffect(() => {
		const getReviews = async () => {
			try {
				setIsLoading(true);

				const response = await services.getReviews({
					limit: 100,
					page: 1,
					status: 'active',
				});

				if (response && response.status && response.data) {
					const { data } = response.data;

					setReviews(data);
				}
			} catch (error) {
				toast({
					position: 'top',
					description: 'Failed to get reviews data',
					status: 'error',
					duration: 3000,
				});
			} finally {
				setIsLoading(false);
			}
		};

		getReviews();
	}, []);

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
						{householdProduct.map((product, index) => (
							<ProductCard
								key={`household-modal-${index}`}
								url={product.imageUrl}
								title={product.title}
							></ProductCard>
						))}
					</HStack>
				);
			case 'skincare':
				return (
					<HStack flexWrap="wrap" justifyContent="space-around" my={20}>
						{skinCareProduct.map((product, index) => (
							<ProductCard
								key={`skincare-modal-${index}`}
								url={product.imageUrl}
								title={product.title}
							></ProductCard>
						))}
					</HStack>
				);
			case 'testimoni':
				return (
					<HStack justifyContent="center" flexWrap="wrap" gap={8} my={20}>
						{reviews.map((review, index) => (
							<Box
								display="flex"
								width={{
									base: '100%',
									lg: 'calc(50% - 24px)',
								}}
								p={{
									base: 4,
									md: 6,
								}}
								key={`review-${index}`}
								bg="primaxBlue"
								ml="0!important"
								height={{
									base: 'auto',
									lg: '320px',
									xl: '250px',
								}}
								overflow="hidden"
								alignItems="center"
							>
								<Flex w="166px" h="166px" flexShrink="0">
									<Image
										src={review.imageUrl}
										alt={`Primaxcel user review ${index + 1}`}
										my="auto"
										mx="auto"
										w="100%"
										h="100%"
										objectFit="contain"
									/>
								</Flex>
								<Flex height="100%" pl={6} alignItems="center">
									<Text as="p" mb={0}>
										{review.description}
									</Text>
								</Flex>
							</Box>
						))}
					</HStack>
				);
		}
	}, [modalCategory, householdProduct, skinCareProduct]);

	return (
		<>
			<Head>
				<title>Our clients that trust us</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="description"
					content="Kami memiliki banyak client yang sudah mempercayakan kami dalam mewujudkan produk impian mereka. Bisnis anda menjadi mudah dengan maklon bersama Primaxcel."
				></meta>
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
				<meta
					property="og:image"
					content="https://primaxcel.co.id/logogram.png"
				></meta>
				<meta name="twitter:title" content="Maklon with us"></meta>
				<meta
					name="twitter:description"
					content="Bisnis skin care anda menjadi mudah dengan maklon bersama Primaxcel. Hubungi kami untuk memulai bisnis anda."
				></meta>
				<meta
					name="twitter:image"
					content="https://primaxcel.co.id/logogram.png"
				></meta>
				<meta name="twitter:site" content="@primaxcel_inv"></meta>
				<meta name="twitter:creator" content="@primaxcel_inv"></meta>
			</Head>
			<Box
				pt={{
					base: '57px',
					md: '65px',
				}}
				minHeight={{
					base: '550px',
					md: '100vh',
				}}
				backgroundImage={`url(${imgPath}/primaxcel-produk.png)`}
				backgroundPosition="bottom"
				backgroundRepeat="no-repeat"
				backgroundSize={{
					base: 'auto',
					lg: '100%',
				}}
				backgroundColor="white"
			>
				<Container pos="relative" maxW="container.xl">
					<Box
						display="flex"
						justifyContent="center"
						alignItems="start"
						pt={{
							base: 50,
							lg: 100,
						}}
					>
						<Text
							as="h1"
							fontWeight="bold"
							color="primaxPurple"
							fontSize={{
								base: '4xl',
								md: '6xl',
							}}
						>
							Our Clients
						</Text>
					</Box>
				</Container>
			</Box>

			{(householdProduct.length && !isHouseholdProductLoading) ||
			isHouseholdProductLoading ? (
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
						<HStack flexWrap="wrap" justifyContent="space-around">
							{isHouseholdProductLoading
								? Array.from(Array(3), (_, index) => (
										<Skeleton
											key={`household-product-loading-${index}`}
											w={{
												base: 'calc(50% - 8px)',
												md: '30%',
											}}
											h="300px"
										></Skeleton>
								  ))
								: householdProduct.map((product, index) => (
										<ProductCard
											key={`household-product-${index}`}
											url={product.imageUrl}
											title={product.title}
										></ProductCard>
								  ))}
						</HStack>

						{isHouseholdProductLoading ? null : (
							<Button
								mt={12}
								px={16}
								py={7}
								onClick={() => handleOpenModal('household')}
							>
								Lihat Selengkapnya
							</Button>
						)}
					</Container>
				</Box>
			) : null}

			{(skinCareProduct.length && !isSkinCareProductLoading) ||
			isSkinCareProductLoading ? (
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

						<HStack flexWrap="wrap" justifyContent="space-around">
							{isSkinCareProductLoading
								? Array.from(Array(3), (_, index) => (
										<Skeleton
											key={`household-product-loading-${index}`}
											w={{
												base: 'calc(50% - 8px)',
												md: '30%',
											}}
											h="300px"
										></Skeleton>
								  ))
								: skinCareProduct.map((product, index) => (
										<ProductCard
											key={`skincare-product-${index}`}
											url={product.imageUrl}
											title={product.title}
										></ProductCard>
								  ))}
						</HStack>

						{isSkinCareProductLoading ? null : (
							<Button
								mt={12}
								px={16}
								py={7}
								onClick={() => handleOpenModal('skincare')}
							>
								Lihat Selengkapnya
							</Button>
						)}
					</Container>
				</Box>
			) : null}

			{(!isLoading && reviews.length) || isLoading ? (
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
							textAlign={{
								base: 'center',
								md: 'left',
							}}
						>
							What they say
						</Text>

						<HStack
							justifyContent="center"
							flexWrap="wrap"
							gap={{
								base: 4,
								md: 8,
							}}
							mt={{
								base: 8,
								md: 20,
							}}
							flexDirection={{
								base: 'column',
								lg: 'row',
							}}
						>
							{isLoading
								? Array.from(Array(4), (_, index) => {
										return (
											<Skeleton
												display="flex"
												w="100%"
												ml="0!important"
												width={{
													base: '100%',
													lg: 'calc(50% - 24px)',
												}}
												h="250px"
												key={`skeleton-${index}`}
											></Skeleton>
										);
								  })
								: reviews.map((review, index) => (
										<Box
											display="flex"
											width={{
												base: '100%',
												lg: 'calc(50% - 24px)',
											}}
											p={{
												base: 4,
												md: 6,
											}}
											key={`review-${index}`}
											bg="primaxBlue"
											ml="0!important"
											height={{
												base: 'auto',
												lg: '320px',
												xl: '250px',
											}}
											overflow="hidden"
											alignItems="center"
										>
											<Flex w="166px" h="166px" flexShrink="0">
												<Image
													src={review.imageUrl}
													alt={`Primaxcel user review ${index + 1}`}
													my="auto"
													mx="auto"
													w="100%"
													h="100%"
													objectFit="contain"
												/>
											</Flex>
											<Flex height="100%" pl={6} alignItems="center">
												<Text as="p" mb={0}>
													{review.description}
												</Text>
											</Flex>
										</Box>
								  ))}
						</HStack>
						{isLoading ? (
							<Flex justifyContent="center" mt={12}>
								<Skeleton w="250px" h="56px"></Skeleton>
							</Flex>
						) : (
							<Button
								mt={12}
								px={16}
								py={7}
								onClick={() => handleOpenModal('testimoni')}
							>
								Lihat Selengkapnya
							</Button>
						)}
					</Container>
				</Box>
			) : null}

			<SectionA
				maxH={{
					base: 'none',
					md: '2xl',
				}}
				py={24}
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
					<Box
						mt={{
							base: 20,
							md: 0,
						}}
						pl={{
							base: '0',
							md: '60px',
						}}
					>
						<Text
							as="h3"
							fontSize="4xl"
							fontWeight="bold"
							color="primaxPurple"
							textAlign={{
								base: 'center',
								md: 'left',
							}}
							mt={{
								base: '140px',
								md: 0,
							}}
						>
							Bisnis skincare menjadi mudah dengan maklon bersama Primaxcel
						</Text>
						<Text as="p" mt={6}>
							Mulai bisnis Anda hari ini, mudah! Hubungi kami untuk memulai
							bisnis maupun untuk info lebih lanjut seputar maklon skincare,
							kosmetik, ataupun produk household.
						</Text>
						<Flex
							justifyContent={{
								base: 'center',
								md: 'flex-start',
							}}
						>
							<Button mt={6} px={16} py={7} onClick={onGoToContactForm}>
								Hubungi Kami
							</Button>
						</Flex>
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
