import { SectionA, SectionC } from '@/components/Layouts';
import {
	Box,
	Flex,
	Text,
	UnorderedList,
	ListItem,
	Image,
	Button,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import Head from 'next/head';
import { MainLayout } from '../components/Layouts';

const OurCompany = () => {
	const carouselSettings = {
		dots: false,
		arrows: false,
		centerMode: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
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
				<meta name="robots" content="index,follow"></meta>
				<meta name="googlebot" content="index,follow"></meta>
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
				{/* <meta property="og:image" content="LINK TO IMAGE"></meta> */}
				<meta name="twitter:title" content="Explore more about us"></meta>
				<meta
					name="twitter:description"
					content="Ketahui riwayat perusahaan, visi, misi, brand yang sudah bekerja sama dengan kami, dan telusuri profile Primaxcel."
				></meta>
				{/* <meta name="twitter:image" content="LINK TO IMAGE"></meta> */}
				{/* <meta name="twitter:site" content="@USERNAME"></meta>
				<meta name="twitter:creator" content="@USERNAME"></meta> */}
			</Head>
			<Box bg="primaxLightBlue" mt="50px" pos="relative">
				<Box maxH="3xl" w="70%">
					<Image
						src="/our-company/set-skin-care-package-banner-design-resource.jpg"
						alt="Skin care package"
						layout="fill"
					/>
				</Box>
				<Box
					pos="absolute"
					top="50%"
					right="200px"
					bg="primaxBlue"
					transform="translate(0% , -50%)"
				>
					<Flex flexDirection="column" w="400px" p="32px" h="350px">
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
							Berpengalaman sejak 1993 mendaftarkan produk obat, skincare, dan
							produk kecantikan untuk memperoleh sertifikasi BPOM.
						</Text>
					</Flex>
				</Box>
			</Box>
			<SectionA
				maxH="lg"
				py={24}
				alignItems="start"
				leftContent={
					<Box minW="lg" textAlign="center" mr="32px">
						<Text as="h1" fontSize="4xl" fontWeight="bold" color="primaxPurple">
							VISI
						</Text>
						<Text as="p" mt={6}>
							Menjadi pionir dalam menciptakan dan memasarkan produk kecantikan
							dan makanan sehat yang tersertifikasi HALAL untuk meningkatkan
							kualitas hidup masyarakat Indonesia
						</Text>
					</Box>
				}
				rightContent={
					<Box minW="lg" textAlign="center" ml="32px">
						<Text as="h1" fontSize="4xl" fontWeight="bold" color="primaxPurple">
							MISI
						</Text>
						<UnorderedList mt={6}>
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
					</Box>
				}
			/>

			<Box py={12} bg="primaxLightBlue" textAlign="center">
				<Text as="h2" mb={12}>
					Brand yang Maklon di Primaxcel
				</Text>
				<Slider {...carouselSettings}>
					<Flex width="500px" height="250px" overflow="hidden" padding="10px">
						<Image
							src="/our-company/ayu-derma.png"
							alt="ayu-derma"
							w="100%"
							h="100%"
							objectFit="cover"
						/>
					</Flex>
					<Flex width="500px" height="250px" overflow="hidden" padding="10px">
						<Image
							src="/our-company/ayu-derma.png"
							alt="ayu-derma"
							w="100%"
							h="100%"
							objectFit="cover"
						/>
					</Flex>
					<Flex width="500px" height="250px" overflow="hidden" padding="10px">
						<Image
							src="/our-company/ayu-derma.png"
							alt="ayu-derma"
							w="100%"
							h="100%"
							objectFit="cover"
						/>
					</Flex>
				</Slider>
			</Box>

			<Box py={12} textAlign="center">
				<Text as="h2" mb={6} color="primaxPurple">
					Company Profile
				</Text>
				<Flex justifyContent="center">
					<Box p={4} bg="primaxBlue">
						<iframe
							width="770"
							height="433"
							src="https://www.youtube.com/embed/q9Rc0pgYQtY?rel=0&controls=0"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</Box>
				</Flex>
			</Box>

			<SectionC
				customSize={['40%', '60%']}
				leftContent={
					<Box px={24} py={40} bg="primaxLightBlue" minH="full">
						<Text as="h2" mb={6} color="primaxPurple">
							Tertarik maklon bersama Primaxcel?
						</Text>
						<Box h="76px"></Box>
						<Button>Hubungi Kami</Button>
					</Box>
				}
				rightContent={
					<div
						style={{
							backgroundImage:
								'url(/our-company/aesthetic-spa-essentials-background-home-decor.jpg)',
							backgroundPosition: 'center',
							backgroundSize: 'cover',
						}}
					>
						<Box px={24} py={40} maxW="550px">
							<Text as="h2" mb={6} color="primaxPurple">
								Sudah memiliki konsep produk?
							</Text>
							<Text as="p">
								Jangan ragu untuk konsultasi konsep produk anda dengan Primaxcel
							</Text>
							<Button>Hubungi Kami</Button>
						</Box>
					</div>
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
