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
import CarouselItem from '@/components/CarouselItem';
import Image from 'next/image';
import Slider from 'react-slick';

// import static image
import modernBeauty from '../public/home/primaxcel-maklon-dengan-kami.jpg';
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
	const [isLoading, setIsLoading] = useState(true);
	const [producedProduct, setProducedProduct] = useState([]);

	const settings = {
		dots: false,
		centerMode: true,
		arrows: false,
		infinite: true,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
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
		if (window.innerWidth < 480) {
			return 1;
		} else if (window.innerWidth < 768) {
			return 2;
		} else if (window.innerWidth < 960) {
			return 3;
		}

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
				<meta
					property="og:image"
					content="https://primaxcel.co.id/logogram.png"
				></meta>
				<meta
					name="twitter:title"
					content="Produce the best beauty product with Primaxcel"
				></meta>
				<meta
					name="twitter:description"
					content="Produsen produk kecantikan terbaik, membuat produk dengan standar Nasional dan Internasional. Wujudkan produk anda bersama Primaxcel."
				></meta>
				<meta
					name="twitter:image"
					content="https://primaxcel.co.id/logogram.png"
				></meta>
				<meta name="twitter:site" content="@primaxcel_inv"></meta>
				<meta name="twitter:creator" content="@primaxcel_inv"></meta>
				<link rel="canonical" href="https://primaxcelinovasi.co.id" />
			</Head>
			<Box
				minH={{
					base: '57px',
					md: '65px',
				}}
				bg="primaxLightBlue"
			></Box>
			<Flex
				bg="primaxLightBlue"
				width="100%"
				flexDirection="column"
				alignItems="center"
			>
				<Flex
					width="100%"
					px={{
						base: '16px',
						md: '88px',
					}}
					height={{
						base: '600px',
						md: '700px',
					}}
					position="relative"
					maxWidth={{
						base: 'none',
						'2xl': '1280px',
					}}
				>
					<Flex
						flexDirection="column"
						justifyContent="center"
						mt={{
							base: '0',
							xl: '80px',
						}}
						zIndex={1}
					>
						<Flex
							width={{
								base: '100%',
								md: '540px',
							}}
						>
							<ImageChakra
								src="/home/primaxcel-logo.png"
								alt="Primaxcel logo"
								maxW="100%"
							/>
						</Flex>
						<Text
							as="p"
							width={{
								base: '100%',
								md: '450px',
							}}
							mt="12px"
							fontWeight={700}
							color="primaxLightPurple"
							textAlign={{ base: 'center', md: 'justify' }}
						>
							PT Primaxcel didirikan sebagai perusahaan produksi yang
							mengutamakan kemajuan teknologi dan berfokus pada produksi
							kosmetik serta makanan sehat. Kami mengedepankan kualitas dan
							standar terbaik agar dapat selalu memenuhi kebutuhan pasar yang
							semakin meningkat.
						</Text>
					</Flex>
					<Box
						pos="absolute"
						right={0}
						bottom={0}
						zIndex={0}
						opacity={{ base: '0.3', xl: '1' }}
					>
						<ImageChakra
							src="/home/primaxcel-produksi-kosmetik.png"
							alt="Kosmetik produsen"
							width={{
								md: '700px',
								xl: '770px',
							}}
						/>
					</Box>
				</Flex>
				<Flex
					width="100%"
					pr={{
						md: 0,
						lg: '88px',
					}}
					pl={{
						md: '88px',
						lg: 0,
					}}
					px={{
						base: '16px',
						md: '88px',
					}}
					mt={{
						base: '50px',
						lg: '40px',
					}}
					maxWidth={{
						base: 'none',
						'2xl': '1280px',
					}}
					alignItems="center"
					textAlign={{
						base: 'center',
						md: 'left',
					}}
				>
					<Flex
						width="50%"
						alignItems="center"
						flexShrink="0"
						opacity={{
							base: '0.3',
							lg: '1',
						}}
						position={{
							base: 'absolute',
							lg: 'relative',
						}}
						display={{
							base: 'none',
							lg: 'flex',
						}}
					>
						<ImageChakra
							src="/home/primaxcel-botol-kosmetik.png"
							alt="Primaxcel botol RnD"
						/>
					</Flex>
					<Box>
						<Text
							as="h1"
							textColor="primaxLightPurple"
							fontSize="48px"
							fontWeight={700}
						>
							Mengapa Kami
						</Text>
						<Text as="p" color="primaxLightPurple" mt="4">
							Primaxcel memiliki tim R&D (Research & Development) yang
							berpengalaman, mesin produksi terbaik, serta proses QC (Quality
							Control) yang sesuai dengan standarisasi nasional maupun
							internasional. Oleh karena itu, kualitas dan keamanan produk akan
							selalu terjamin.
						</Text>
						<Text as="p" color="primaxLightPurple">
							Primaxcel telah terstandarisasi Nasional maupun Internasional,
							CPKB (Cara Pembuatan Kosmetik yang Baik), SPP-IRT (Sertifikat
							Produksi Pangan-Industri Rumah Tangga). GMP (Good Manufacturing
							Practice).
						</Text>
						<Text as="p" color="primaxLightPurple">
							Jaminan memperoleh sertifikasi BPOM & Halal untuk produk yang
							maklon di Primaxcel.
						</Text>
					</Box>
				</Flex>
				<Flex
					width="100%"
					height="auto"
					padding={{
						base: '40px 16px',
						md: '0 88px',
						lg: '0 88px 0 0',
					}}
					maxWidth={{
						base: 'none',
						'2xl': '1280px',
					}}
					mt={{
						base: '50px',
						lg: 0,
					}}
					alignItems="center"
					textAlign={{
						base: 'center',
						md: 'left',
					}}
					flexDirection={{
						base: 'column',
						lg: 'row',
					}}
				>
					<Flex
						flex="1"
						alignItems="center"
						height={{
							base: 'auto',
							lg: '522px',
						}}
						width={{
							base: '100%',
							lg: 'auto',
						}}
						bg="primaxBlue"
						position="relative"
					>
						<Flex
							position={{
								base: 'relative',
								lg: 'absolute',
							}}
							width="100%"
							height={{
								base: 'auto',
								lg: 'calc(100% - 80px)',
							}}
							left={{
								base: 'auto',
								lg: '56px',
							}}
						>
							<Image
								src={modernBeauty}
								alt="Maklon bersama Primaxcel"
								objectFit="cover"
							/>
						</Flex>
					</Flex>
					<Box
						width={{
							base: '100%',
							lg: '500px',
						}}
						ml={{
							base: 0,
							lg: 'calc(88px + 20px)',
						}}
						py={{
							base: 0,
							lg: '40px',
						}}
						mt={{
							base: '40px',
							lg: 0,
						}}
					>
						<Box
							width={{
								base: '100%',
								lg: '450px',
							}}
							textAlign={{
								base: 'center',
								lg: 'left',
							}}
						>
							<Text
								as="h2"
								textColor="primaxLightPurple"
								fontSize="40px"
								mb={4}
								textAlign={{
									base: 'center',
									lg: 'left',
								}}
							>
								Maklon bersama kami
							</Text>
							<Text
								as="p"
								textAlign={{
									base: 'center',
									lg: 'left',
								}}
							>
								Anda memiliki ide bisnis?
								<br /> Bingung mulai bisnis dari mana?
							</Text>
							<Text
								as="p"
								textAlign={{
									base: 'center',
									lg: 'left',
								}}
							>
								Primaxcel bisa membantu mengubah ide kreatif yang Anda miliki
								menjadi produk impian Anda dengan proses komunikasi yang mudah.
							</Text>
							<Text
								as="p"
								textAlign={{
									base: 'center',
									lg: 'left',
								}}
							>
								Wujudkan produk sesuai keinginan Anda sekarang!
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
					</Box>
				</Flex>
			</Flex>
			{(producedProduct.length && !isLoading) || isLoading ? (
				<Box py={10} bg="primaxLightBlue" textAlign="center">
					<Text as="h2">Produk yang kami produksi</Text>

					{isLoading ? (
						<Skeleton w="80%" h="300px" mx="auto" my="40px"></Skeleton>
					) : producedProduct.length ? (
						<Slider {...settings} slidesToShow={getSlideCount()}>
							{producedProduct.map((product, index) => (
								<CarouselItem
									img={product.imageUrl}
									label={product.title}
									key={`produced-product-${index}`}
								/>
							))}
						</Slider>
					) : null}

					<Button py={6} px={14} onClick={onGoToContactForm} mt="24px">
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
						gap={{
							base: 4,
							md: 16,
						}}
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
								Representatif kami adalah professional yang akan membantu dan
								membimbing anda untuk mengubah ide menjadi produk unik serta
								bisa dipasarkan.
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
								Memudahkan entrepreneur dalam mewujudkan produk impian, dengan
								kuantiti order yang bisa disesuaikan dan proses pembayaran yang
								mudah. Kami memastikan agar partner kami dapat memperoleh produk
								dengan harga yang kompetitif.
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
								Tim Research & Development kami berpengalaman dalam menciptakan
								produk kosmetik, skincare, produk sanitasi, serta kebersihan
								rumah tangga yang berkualitas tinggi.
							</Text>
						</Flex>
					</Flex>
					<Flex
						mt={2}
						gap={{
							base: 4,
							md: 16,
						}}
						alignItems="start"
						justifyContent="center"
						flexDirection={{
							base: 'column',
							md: 'row',
						}}
					>
						<Flex
							textAlign="center"
							alignItems="center"
							flexDirection="column"
							width={{
								base: '100%',
								md: 'calc((100% / 3) - 40px)',
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
								width="150px"
							>
								Jaminan Mutu dan Kualitas
							</Text>
							<Text mt={4} as="p">
								Semua proses produksi serta bahan baku yang digunakan sesuai
								dengan standarisasi nasional dan diawasi secara ketat oleh tim
								quality control agar produk yang dihasilkan aman dan
								berkualitas.
							</Text>
						</Flex>

						<Flex
							textAlign="center"
							alignItems="center"
							flexDirection="column"
							width={{
								base: '100%',
								md: 'calc((100% / 3) - 40px)',
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
								width="120px"
							>
								Perizinan Mudah
							</Text>
							<Text mt={4} as="p">
								Kami akan membantu proses legalitas, registrasi BPOM, serta
								sertifikasi halal produk Anda sebelum dipasarkan.
							</Text>
						</Flex>
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
