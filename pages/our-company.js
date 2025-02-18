import { SectionA, SectionC } from '@/components/Layouts';
import {
	Box,
	Flex,
	Text,
	UnorderedList,
	ListItem,
	Image,
	Button,
	useToast,
	Skeleton,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import Head from 'next/head';
import { MainLayout } from '../components/Layouts';
import useWindowSize from '@/hooks/useWindowSize';
import services from '@/services';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const OurCompany = () => {
	const router = useRouter();
	const toast = useToast();
	const { isMobile } = useWindowSize();
	const [videoUrl, setVideoUrl] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [maklonProduct, setMaklonProduct] = useState([]);
	const [isProductLoading, setIsProductLoading] = useState(true);

	const settings = {
		dots: false,
		centerMode: true,
		arrows: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};

	useEffect(() => {
		const getCompanyDetail = async () => {
			try {
				setIsLoading(true);

				const response = await services.getCompany();

				if (response && response.status && response.data) {
					setVideoUrl(response.data.videoProfileUrl);
				}
			} catch (error) {
				toast({
					position: 'top',
					description: 'Failed to get company data',
					status: 'error',
					duration: 3000,
				});
			} finally {
				setIsLoading(false);
			}
		};

		getCompanyDetail();
	}, []);

	useEffect(() => {
		const getMaklonProduct = async () => {
			try {
				setIsProductLoading(true);

				const response = await services.getProducts({
					limit: 30,
					page: 1,
					type: 'maklon',
				});

				if (response && response.status && response.data) {
					setMaklonProduct(response.data.data);
				}
			} catch (error) {
				toast({
					position: 'top',
					description: 'Failed to get maklon product',
					status: 'error',
					duration: 3000,
				});
			} finally {
				setIsProductLoading(false);
			}
		};

		getMaklonProduct();
	}, []);

	const onGoToContactForm = () => {
		router.push('/contact-us#contact-form');
	};

	const getSlideCount = () => {
		if (isMobile) return 1;

		return maklonProduct.length < 3 ? maklonProduct.length : 3;
	};

	return (
		<>
			<Head>
				<title>About Primaxcel: explore more about us</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="description"
					content="Cari tahu lebih banyak tentang kami, dari riwayat perusahaan, visi, misi, brand yang sudah bekerja sama dengan kami, dan telusuri profile kami."
				></meta>
				<meta property="og:type" content="website"></meta>
				<meta
					property="og:url"
					content="https://primaxcelinovasi.co.id/our-company"
				></meta>
				<meta property="og:title" content="Explore more about us"></meta>
				<meta
					property="og:description"
					content="Ketahui riwayat perusahaan, visi, misi, brand yang sudah bekerja sama dengan kami, dan telusuri profile Primaxcel."
				></meta>
				<meta
					property="og:image"
					content="https://primaxcel.co.id/logogram.png"
				></meta>
				<meta name="twitter:title" content="Explore more about us"></meta>
				<meta
					name="twitter:description"
					content="Ketahui riwayat perusahaan, visi, misi, brand yang sudah bekerja sama dengan kami, dan telusuri profile Primaxcel."
				></meta>
				<meta
					name="twitter:image"
					content="https://primaxcel.co.id/logogram.png"
				></meta>
				<meta name="twitter:site" content="@primaxcel_inv"></meta>
				<meta name="twitter:creator" content="@primaxcel_inv"></meta>
			</Head>
			<Box
				minH={{
					base: '57px',
					md: '65px',
				}}
				bg="primaxLightBlue"
			></Box>
			<Box
				bg="primaxLightBlue"
				pos="relative"
				height={{
					base: 'calc(100vh - 57px)',
					md: 'calc(100vh - 65px)',
				}}
			>
				<Box
					w={{
						base: '100%',
						md: '75%',
					}}
					height="100%"
				>
					<Image
						src="/our-company/set-skin-care-package-banner-design-resource.jpg"
						alt="Skin care package"
						objectFit="cover"
						height="100%"
					/>
				</Box>
				<Box
					pos="absolute"
					top="50%"
					left={{
						base: '50%',
						md: 'calc(75% - 200px)',
						lg: 'calc(75% - 300px)',
					}}
					bg={{
						base: 'rgba(201, 229, 235, 0.7)',
						md: 'primaxBlue',
					}}
					transform={{
						base: 'translate(-50% , -50%)',
						md: 'translate(0% , -50%)',
					}}
				>
					<Flex flexDirection="column" w="450px" p="32px" h="350px">
						<Text
							as="h2"
							mb={4}
							color="primaxPurple"
							fontSize={24}
							fontWeight="extrabold"
						>
							Company History
						</Text>
						<Text as="p">
							PT Primaxcel merupakan bagian dari Pharos Group yang sudah
							berpengalaman sejak tahun 1993 dalam formulasi & pendaftaran
							produk obat, kosmetik, dan skincare untuk memperoleh sertifikasi
							BPOM.
						</Text>
					</Flex>
				</Box>
			</Box>
			<SectionA
				py={24}
				alignItems="start"
				isFitContent
				leftContent={
					<Flex textAlign="center" flexDirection="column" alignItems="center">
						<Text as="h1" fontSize="4xl" fontWeight="bold" color="primaxPurple">
							VISI
						</Text>
						<Text
							as="p"
							mt={6}
							width={{
								base: 'auto',
								md: '340px',
							}}
						>
							Menjadi pionir dalam menciptakan dan memasarkan produk kecantikan
							dan makanan sehat yang tersertifikasi HALAL untuk meningkatkan
							kualitas hidup masyarakat Indonesia.
						</Text>
					</Flex>
				}
				rightContent={
					<Flex
						textAlign="center"
						flexDirection="column"
						alignItems="center"
						mt={{
							base: '8',
							md: '0',
						}}
					>
						<Text as="h1" fontSize="4xl" fontWeight="bold" color="primaxPurple">
							MISI
						</Text>
						<UnorderedList
							mt={6}
							width={{
								base: 'auto',
								md: '500px',
							}}
						>
							<ListItem>
								<Text as="p">
									Mewujudkan layanan yang mengutamakan pelanggan.
								</Text>
							</ListItem>
							<ListItem>
								<Text as="p">
									Menggunakan fasilitas dan teknologi produksi tertinggi dengan
									efisien untuk menghasilkan produk kecantikan dan makanan sehat
									dengan kualitas terbaik.
								</Text>
							</ListItem>
							<ListItem>
								<Text as="p">
									Menciptakan produk bersertifikasi HALAL sebagai solusi terbaik
									untuk berbagai masalah yang dialami pelanggan.
								</Text>
							</ListItem>
						</UnorderedList>
					</Flex>
				}
			/>

			{(maklonProduct.length && !isLoading) || isLoading ? (
				<Box py={12} bg="primaxLightBlue" textAlign="center">
					<Text as="h2" mb={12}>
						Brand yang Maklon di Primaxcel
					</Text>
					<Box maxW="1280px" margin="0 auto">
						{isProductLoading ? (
							<Skeleton w="80%" h="240px" mx="auto" my="40px"></Skeleton>
						) : maklonProduct.length ? (
							<Slider {...settings} slidesToShow={getSlideCount()}>
								{maklonProduct.map((maklon, index) => (
									<Flex
										key={`maklon-product-${index}`}
										maxW={{
											base: 'calc(0.8 * 100vw)',
											md: 'calc((100vw / 3) - 40px)',
											xl: '380px',
										}}
										minW={{
											base: 'calc(0.8 * 100vw)',
											md: 'calc((100vw / 3) - 40px)',
											xl: '380px',
										}}
										height={{
											base: 'calc((0.8 * 100vw) / 2)',
											md: 'calc(((100vw / 3) - 40px) / 2)',
											xl: '190px',
										}}
										overflow="hidden"
										padding="10px"
									>
										<Image
											src={maklon.imageUrl}
											alt={maklon.title}
											w="100%"
											h="100%"
											objectFit="cover"
										/>
									</Flex>
								))}
							</Slider>
						) : null}
					</Box>
				</Box>
			) : null}

			{(videoUrl && !isLoading) || isLoading ? (
				<Box py={12} textAlign="center">
					<Text as="h2" mb={6} color="primaxPurple">
						Company Profile
					</Text>
					<Flex justifyContent="center">
						{isLoading ? (
							<Skeleton
								width={{
									base: '100%',
									md: '770px',
								}}
								height="433px"
							></Skeleton>
						) : (
							<Box
								p={4}
								bg="primaxBlue"
								width={{
									base: '100%',
									md: '770px',
								}}
							>
								<iframe
									width="100%"
									height="433"
									src={`${videoUrl}?rel=0&controls=0`}
									title="YouTube video player"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</Box>
						)}
					</Flex>
				</Box>
			) : null}

			<SectionC
				customSize={['40%', '60%']}
				leftContent={
					<Flex
						bg="primaxLightBlue"
						minH="full"
						alignItems="center"
						height={{
							base: 'auto',
							md: '650px',
						}}
						py={{
							base: '48px',
							md: '0',
						}}
					>
						<Flex
							flexDirection="column"
							width="100%"
							px="60px"
							height={{
								base: 'auto',
								md: '290px',
							}}
							justifyContent={{
								base: 'flex-start',
								md: 'space-between',
							}}
						>
							<Text as="h2" color="primaxPurple">
								Tertarik maklon bersama Primaxcel?
							</Text>
							<Button
								onClick={onGoToContactForm}
								alignSelf="flex-start"
								mt={{
									base: '24px',
									md: '0',
								}}
							>
								Hubungi Kami
							</Button>
						</Flex>
					</Flex>
				}
				rightContent={
					<Box
						backgroundImage="url(/our-company/aesthetic-spa-essentials-background-home-decor.jpg)"
						backgroundPosition="center"
						backgroundSize="cover"
						height="100%"
						display="flex"
						alignItems="center"
						py={{
							base: '48px',
							md: '0',
						}}
					>
						<Box width="360px" ml="60px" height="290px">
							<Text as="h2" color="primaxPurple">
								Sudah memiliki konsep produk?
							</Text>
							<Text as="p" mt="18px">
								Jangan ragu untuk konsultasi konsep produk Anda dengan Primaxcel
							</Text>
							<Button mt="24px" onClick={onGoToContactForm}>
								Hubungi Kami
							</Button>
						</Box>
					</Box>
				}
			/>
		</>
	);
};

const getLayout = (page) => {
	return <MainLayout>{page}</MainLayout>;
};

OurCompany.getLayout = getLayout;

export default OurCompany;
