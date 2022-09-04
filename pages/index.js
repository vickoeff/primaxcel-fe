import {
	Container,
	Box,
	Text,
	Button,
	Image as ImageChakra,
	Flex,
	useToast,
	Skeleton,
} from '@chakra-ui/react';
import Head from 'next/head';
import { SectionA, SectionB } from '@/components/Layouts';
import CarouselItem from '@/components/CarouselItem';
import Image from 'next/image';
import Slider from 'react-slick';

import useWindowSize from '@/hooks/useWindowSize';

// import static image
import modernBeauty from '../public/home/primaxcel-maklon-dengan-kami.jpg';
import oilDropper from '../public/home/primaxcel-maklon-skin-care.jpg';
import discuss from '../public/home/discuss.svg';
import money from '../public/home/money.svg';
import science from '../public/home/science.svg';
import shield from '../public/home/shield.svg';
import paper from '../public/home/paper.svg';
import halalLogo from '../public/home/primaxcel-sertifikasi-halal.png';
import cpkbLogo from '../public/home/primaxcel-sertifikasi-produsen.png';
import gmpLogo from '../public/home/primaxcel-sertifikasi-gmp.png';
import bpomLogo from '../public/home/primaxcel-sertifikasi-bpom.png';
import { MainLayout } from '../components/Layouts';
import ContactForm from '@/components/ContactForm';

import { useEffect, useState } from 'react';
import services from '@/services';

const Home = () => {
	const toast = useToast();
	const { isMobile } = useWindowSize();
	const [isLoading, setIsLoading] = useState(true);
	const [producedProduct, setProducedProduct] = useState([]);

	const carouselSettings = {
		dots: false,
		arrows: false,
		centerMode: true,
		infinite: true,
		speed: 500,
		slidesToScroll: 1,
		autplay: true,
		autoplaySpeed: 500,
	};

	useEffect(() => {
		const getProducedProduct = async () => {
			try {
				setIsLoading(true);

				const response = await services.getProducts({
					limit: 30,
					page: 1,
					type: 'produced',
				});

				if (response && response.status && response.data) {
					setProducedProduct(response.data.data);
				}
			} catch (error) {
				toast({
					position: 'top',
					description: 'Failed to get produced product',
					status: 'error',
					duration: 3000,
				});
			} finally {
				setIsLoading(false);
			}
		};

		getProducedProduct();
	}, []);

	const onGoToContactForm = () => {
		const contactForm = document.getElementById('contact-form');
		window.scrollTo(0, contactForm.offsetTop);
	};

	const getSlideCount = () => {
		if (isMobile) return 1;

		return producedProduct.length < 4 ? producedProduct.length : 4;
	};

	return (
		<>
			<Head>
				<title>Produce the best beauty product with Primaxcel</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="description"
					content="Primaxcel adalah produsen produk kecantikan terbaik, membuat produk dengan standar Nasional dan Internasional. Wujudkan produk anda bersama Primaxcel."
				></meta>
				<meta name="robots" content="index,follow"></meta>
				<meta name="googlebot" content="index,follow"></meta>
				<meta property="og:type" content="website"></meta>
				<meta property="og:url" content="https://primaxcelinovasi.co.id"></meta>
				<meta
					property="og:title"
					content="Produce the best beauty product with Primaxcel"
				></meta>
				<meta
					property="og:description"
					content="Produsen produk kecantikan terbaik, membuat produk dengan standar Nasional dan Internasional. Wujudkan produk anda bersama Primaxcel."
				></meta>
				{/* <meta property="og:image" content="LINK TO IMAGE"></meta> */}
				<meta
					name="twitter:title"
					content="Produce the best beauty product with Primaxcel"
				></meta>
				<meta
					name="twitter:description"
					content="Produsen produk kecantikan terbaik, membuat produk dengan standar Nasional dan Internasional. Wujudkan produk anda bersama Primaxcel."
				></meta>
				{/* <meta name="twitter:image" content="LINK TO IMAGE"></meta> */}
				<meta name="twitter:site" content="@primaxcel_inv"></meta>
				<meta name="twitter:creator" content="@primaxcel_inv"></meta>
				<link rel="canonical" href="https://primaxcelinovasi.co.id" />
			</Head>
			<Box minH={100} bg="primaxLightBlue"></Box>
			<SectionA
				isReverse
				isFitContent
				customSize={isMobile ? ['0', '100%'] : ['50%', '50%']}
				bg="primaxLightBlue"
				leftContent={
					<Box
						pos="absolute"
						right={0}
						top={0}
						maxW={{ base: '100%', md: '60%' }}
						zIndex={0}
						opacity={{ base: '0.3', md: '1' }}
					>
						<ImageChakra
							src="/home/primaxcel-produksi-kosmetik.png"
							alt="Kosmetik produsen"
						/>
					</Box>
				}
				rightContent={
					<Flex
						pos="relative"
						flexDirection="column"
						zIndex={1}
						mt={{ base: '0', md: '-48px' }}
						minH={{ base: '350px', sm: '450px', md: 'lg', lg: 'xl', xl: '3xl' }}
						alignItems={{ base: 'center', md: 'flex-start' }}
						justifyContent="center"
					>
						<Box display={{ base: 'none', md: 'block' }}>
							<ImageChakra
								src="/home/primaxcel-logo.png"
								alt="Primaxcel logo"
								maxW="100%"
							/>
						</Box>
						<Text
							as="p"
							maxW={{ base: '100%', md: '70%' }}
							fontWeight={700}
							color="primaxLightPurple"
							textAlign={{ base: 'center', md: 'justify' }}
						>
							Didirikan sebagai perusahaan produksi progresif, berfokus pada
							produksi kosmetik dan makanan sehat dengan kualitas terbaik dan
							sesuai standar Nasional & Internasional.
						</Text>
					</Flex>
				}
			/>
			<SectionB
				bg="primaxLightBlue"
				alignItems="center"
				imgWidth={{
					base: '100%',
					md: '50%',
				}}
				img={
					<Box
						pos="absolute"
						bottom="-8px"
						zIndex={{
							base: 1,
							md: 0,
						}}
						opacity={{
							base: '0.3',
							md: '1',
						}}
					>
						<ImageChakra
							src="/home/primaxcel-botol-kosmetik.png"
							alt="Primaxcel botol RnD"
						/>
					</Box>
				}
				minH={{
					base: '0',
					md: '2xl',
				}}
				containerWidth="100%"
				containerPadding={{
					base: '0',
					md: '0 60px 0 0',
				}}
				content={
					<Box
						zIndex={{
							base: 1,
							md: 0,
						}}
						position="relative"
						padding={{
							base: '40px 16px',
							md: 0,
						}}
					>
						<Text
							as="h1"
							textColor="primaxLightPurple"
							fontSize="5xl"
							fontWeight={800}
						>
							Mengapa Kami
						</Text>
						<Text as="p" color="primaxLightPurple" mt="4">
							Primaxcel menjamin kualitas dan keamanan produk serta sistem
							produksi. Dengan tim R&D (Riset & Developmen) yang berpengalaman,
							mesin produksi terbaik, serta proses dan QC (Quality Control) yang
							sesuai dengan standarisasi nasional maupun internasional.
						</Text>
						<Text as="p" color="primaxLightPurple">
							Primaxcel telah terstandarisasi Nasional maupun Internasional,
							CPKB (Cara Pembuatan Kosmetik yang Baik), SPP-IRT (Sertifikat
							Produksi Pangan-Industri Rumah Tangga), GMP (Good Manufacturing
							Practice).
						</Text>
						<Text as="p" color="primaxLightPurple">
							Jaminan memperoleh sertifikasi BPOM & Halal untuk produk yang
							maklon di Primaxcel.
						</Text>
					</Box>
				}
			/>
			<SectionA
				bg="primaxWhite"
				isFitContent
				p="40px 0"
				leftContent={
					<>
						<Box
							pos="absolute"
							top={0}
							left={0}
							w="50%"
							h={{
								base: '520px',
								xl: '550px',
							}}
							bg="primaxBlue"
							display={{
								base: 'none',
								md: 'block',
							}}
						></Box>
						<Box
							pos="relative"
							width={{
								base: '100%',
								md: '110%',
							}}
						>
							<Image src={modernBeauty} alt="Maklon bersama Primaxcel" />
						</Box>
					</>
				}
				rightContent={
					<Box
						ml={{
							base: '0',
							md: '90px',
						}}
					>
						<Text
							as="h2"
							textColor="primaxLightPurple"
							mb={4}
							textAlign={{
								base: 'center',
								md: 'left',
							}}
						>
							Maklon bersama kami
						</Text>
						<Text
							as="p"
							textAlign={{
								base: 'center',
								md: 'left',
							}}
						>
							Anda memiliki ide bisnis?
							<br /> Bingung mulai bisnis dari mana?
						</Text>
						<Text as="p">
							Primaxcel bisa membantu anda mengubah ide kreatif yang anda miliki
							menjadi produk impian anda.
						</Text>
						<Text as="p">
							Dengan langkah-langkah dan komunikasi yang mudah. Wujudkan produk
							sesuai keinginan anda.
							<br />
							<br />
							Jangan ragu lagi
						</Text>
						<Button
							py={6}
							px={14}
							display={{
								base: 'flex',
								md: 'inline-flex',
							}}
							margin={{
								base: '0 auto',
								md: '0',
							}}
							onClick={onGoToContactForm}
						>
							Hubungi Kami
						</Button>
					</Box>
				}
			/>
			<SectionA
				isReverse
				isFitContent
				bg="primaxWhite"
				padding="40px 0"
				leftContent={
					<>
						<Box
							pos="relative"
							pl="40px"
							display={{
								base: 'none',
								md: 'block',
							}}
						>
							<Box
								pos="absolute"
								top={0}
								bottom={0}
								right={0}
								left={0}
								m="auto"
								w="calc(100% + 40px)"
								h="300px"
								bg="primaxBlue"
							></Box>
							<Image src={oilDropper} alt="Maklon dengan produk kecantikan" />
						</Box>
					</>
				}
				rightContent={
					<Box
						mr={{
							base: '0',
							md: '50px',
						}}
					>
						<Text as="h2" textColor="primaxLightPurple" mb={6}>
							Mengenai Maklon
						</Text>
						<Text as="p">
							Maklon, terutama produk beauty berupa skincare menjadi bisnis yang
							berkembang pesat saat ini. Tingginya ketertarikan konsumen
							skincare yang terus meningkat, membuat kerjasama maklon menjadi
							pilihan yang cepat dan tepat untuk memulai maupun mengembangkan
							bisnis anda.
						</Text>
						<Text as="p">
							Dengan kemudahan pembuatan produk sesuai keinginan anda, Primaxcel
							juga bisa membantu anda mendesain produk dari nol hingga siap
							dipasarkan, dengan perizinan yang lengkap.
						</Text>
						<Text as="p">
							Primaxcel siap melayani anda maklon produk beauty, makanan sehat,
							serta kebutuhan rumah tangga, dengan kualitas tinggi dan harga
							bersaing.
						</Text>
					</Box>
				}
			/>
			{(producedProduct.length && !isLoading) || isLoading ? (
				<Box py={10} bg="primaxLightBlue" textAlign="center">
					<Text as="h2">Produk yang kami produksi</Text>

					{isLoading ? (
						<Skeleton w="80%" h="300px" mx="auto" my="40px"></Skeleton>
					) : producedProduct.length ? (
						<Slider {...carouselSettings} slidesToShow={getSlideCount()}>
							{producedProduct.map((product, index) => (
								<CarouselItem
									img={product.imageUrl}
									label={product.title}
									key={`produced-product-${index}`}
								/>
							))}
						</Slider>
					) : null}

					<Button py={6} px={14} onClick={onGoToContactForm}>
						Cara Order
					</Button>
				</Box>
			) : null}

			<Box py={8}>
				<Container maxW="container.xl">
					<Text as="h2" textAlign="center">
						Mengapa Maklon Bersama Primaxcel?
					</Text>
					<Flex
						mt={8}
						gap={6}
						alignItems="start"
						justifyContent="center"
						flexDirection={{
							base: 'column',
							md: 'row',
						}}
					>
						<Flex
							textAlign="center"
							flexDirection="column"
							width={{
								base: '100%',
								md: 'calc(100% / 3)',
							}}
						>
							<Box
								display="flex"
								justifyContent="center"
								alignItems="center"
								minH="155px"
							>
								<Image src={discuss} alt="Proses mudah" />
							</Box>
							<Text
								as="h3"
								mt={4}
								fontSize="2xl"
								textColor="primaxPurple"
								fontWeight="bold"
							>
								Proses Mudah
							</Text>
							<Text mt={4} as="p">
								Representatif kami adalah profesional yang akan membantu dan
								membimbing anda, merubah ide menjadi produk yang unik dan bisa
								dipasarkan.
							</Text>
						</Flex>

						<Flex
							textAlign="center"
							flexDirection="column"
							width={{
								base: '100%',
								md: 'calc(100% / 3)',
							}}
						>
							<Box
								display="flex"
								justifyContent="center"
								alignItems="center"
								minH="155px"
							>
								<Image src={money} alt="Modal kecil" />
							</Box>
							<Text
								as="h3"
								mt={4}
								fontSize="2xl"
								textColor="primaxPurple"
								fontWeight="bold"
							>
								Modal Kecil
							</Text>
							<Text mt={4} as="p">
								Memudahkan beautypreneur dalam mewujudkan produk impian, dengan
								kemudahan pembayaran serta MOQ yang bisa disesuaikan. Memastikan
								konsumen memperoleh produk dengan harga yang kompetitif.
							</Text>
						</Flex>

						<Flex
							textAlign="center"
							flexDirection="column"
							width={{
								base: '100%',
								md: 'calc(100% / 3)',
							}}
						>
							<Box
								display="flex"
								justifyContent="center"
								alignItems="center"
								minH="155px"
							>
								<Image src={science} alt="RnD" />
							</Box>
							<Text
								as="h3"
								mt={4}
								fontSize="2xl"
								textColor="primaxPurple"
								fontWeight="bold"
							>
								R&D
							</Text>
							<Text mt={4} as="p">
								Tim Riset dan Developmen kami berpengalaman dalam menciptakan
								produk-produk kosmetik, makanan sehat, serta produk rumah tangga
								berkualitas tinggi.
							</Text>
						</Flex>
					</Flex>
					<Flex
						mt={8}
						gap={6}
						alignItems="start"
						justifyContent="center"
						flexDirection={{
							base: 'column',
							md: 'row',
						}}
					>
						<Box
							textAlign="center"
							width={{
								base: '100%',
								md: 'calc(100% / 3)',
							}}
						>
							<Box
								display="flex"
								justifyContent="center"
								alignItems="center"
								minH="155px"
							>
								<Image src={shield} alt="Jaminan mutu dan kualitas" />
							</Box>
							<Text
								as="h3"
								mt={4}
								fontSize="2xl"
								textColor="primaxPurple"
								fontWeight="bold"
							>
								Jaminan Mutu dan Kualitas
							</Text>
							<Text mt={4} as="p">
								Semua proses yang dikerjakan serta bahan baku yang digunakan
								sesuai dengan standarisasi nasional dan internasional. Dengan
								pengawasan dan QC yang ketat. Demi menghasilkan produk yang aman
								dan berkualitas.
							</Text>
						</Box>

						<Box
							width={{
								base: '100%',
								md: 'calc(100% / 3)',
							}}
						>
							<Box
								display="flex"
								justifyContent="center"
								alignItems="center"
								minH="155px"
							>
								<Image src={paper} alt="Perizinan mudah" />
							</Box>
							<Text
								as="h3"
								mt={4}
								fontSize="2xl"
								textColor="primaxPurple"
								fontWeight="bold"
							>
								Perizinan Mudah
							</Text>
							<Text mt={4} as="p">
								Kami pastikan legalitas, keamanan serta kehalalan produk anda
								sebelum dipasarkan. Dengan memperoleh izin BPOM, Halal MUI, Uji
								Dermatologi, dan Hak paten.
							</Text>
						</Box>
					</Flex>
				</Container>
			</Box>

			<Box
				py={{
					base: 8,
					md: 16,
				}}
				bg="primaxLightBlue"
			>
				<Container maxW="container.xl">
					<Text as="h2" textAlign="center">
						Company Certifications
					</Text>
					<Flex mt={8} flexWrap="wrap">
						<Box
							display="flex"
							justifyContent="center"
							alignItems="center"
							width={{
								base: '50%',
								md: '25%',
							}}
						>
							<Image
								src={halalLogo}
								alt="Sertifikasi halal"
								objectFit="contain"
								w="100%"
								h="100%"
							/>
						</Box>
						<Box
							display="flex"
							justifyContent="center"
							alignItems="center"
							width={{
								base: '50%',
								md: '25%',
							}}
						>
							<Image src={bpomLogo} alt="Sertifikasi BPM" />
						</Box>
						<Box
							display="flex"
							justifyContent="center"
							alignItems="center"
							width={{
								base: '50%',
								md: '25%',
							}}
						>
							<Image src={gmpLogo} alt="Sertifikasi GMP" />
						</Box>
						<Box
							display="flex"
							justifyContent="center"
							alignItems="center"
							width={{
								base: '50%',
								md: '25%',
							}}
						>
							<Image src={cpkbLogo} alt="Sertifikasi CPKB" />
						</Box>
					</Flex>
				</Container>
			</Box>

			<Box
				style={{
					backgroundImage: 'url(/home/primaxcel-overlay-background.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}
			>
				<Text
					as="h2"
					py={{
						base: '24',
						md: '48',
					}}
					color="primaxPurple"
					fontSize={{
						base: '3xl',
						md: '6xl',
					}}
					fontWeight="bold"
					textAlign="center"
					backgroundColor="rgba(196, 196, 196, 0.6)"
				>
					Ingin tahu lebih lanjut?
				</Text>
			</Box>

			<ContactForm></ContactForm>
		</>
	);
};

const getLayout = (page) => {
	return <MainLayout>{page}</MainLayout>;
};

Home.getLayout = getLayout;

export default Home;
