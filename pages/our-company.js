import { SectionA, SectionC } from '@/components/Layouts';
import {
	Box,
	Container,
	Flex,
	Text,
	UnorderedList,
	ListItem,
	HStack,
	Button,
} from '@chakra-ui/react';
import Image from 'next/image';
import Slider from 'react-slick';

// import static image
import SetSkinPack from '../public/our-company/set-skin-care-package-banner-design-resource.jpg';
import AyuDerma from '../public/our-company/ayu-derma.png';
import ISkin from '../public/our-company/i-skin.png';
import Mij from '../public/our-company/mij.png';
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
			<Box bg="primaxLightBlue">
				<Box pos="absolute" zIndex={1} maxH="3xl" overflow="hidden">
					<Image src={SetSkinPack} alt="Skin care package" />
				</Box>
				<Container pos="relative" maxW="container.lg" zIndex={2}>
					<Flex alignItems="center" justifyContent="end" minH="3xl">
						<Box minH="sm" bg="primaxBlue" maxW="lg" p={10}>
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
						</Box>
					</Flex>
				</Container>
			</Box>

			<SectionA
				maxH="lg"
				py={24}
				gap={20}
				alignItems="start"
				leftContent={
					<Box minW="lg" textAlign="center">
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
					<Box minW="lg" textAlign="center">
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
					<Image src={AyuDerma} alt="ayu-derma" />
					<Image src={ISkin} alt="i-skin" />
					<Image src={Mij} alt="mij" />
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
				customSize={['30%', '70%']}
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
						<Box px={24} py={40} maxW="573px">
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
