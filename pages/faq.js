import { Container, Flex, Image, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { MainLayout } from '../components/Layouts';
import { LEFT_FAQ, RIGHT_FAQ } from '@/constant/faq';
import { useRouter } from 'next/router';

const Faq = () => {
	const router = useRouter();

	const onOpenFaq = () => {
		router.push('/contact-us#contact-form');
	};

	return (
		<>
			<Head>
				<title>Frequently asked question about Primaxcel</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="description"
					content="Temukan jawaban mengenai pertanyaan yang sering ditanyakan kepada kami. Kami akan membantu menjawab pertanyaan anda untuk mewujudkan produk impian."
				></meta>
				<meta property="og:type" content="website"></meta>
				<meta
					property="og:url"
					content="https://primaxcelinovasi.co.id/faq"
				></meta>
				<meta
					property="og:title"
					content="Frequently asked question about Primaxcel"
				></meta>
				<meta
					property="og:description"
					content="Cari jawaban dari pertanyaan anda di Primaxcel. Kami akan membantu anda dalam mewujudkan produk impian anda."
				></meta>
				<meta
					property="og:image"
					content="https://primaxcel.co.id/logogram.png"
				></meta>
				<meta
					name="twitter:title"
					content="Frequently asked question about Primaxcel"
				></meta>
				<meta
					name="twitter:description"
					content="Cari jawaban dari pertanyaan anda di Primaxcel. Kami akan membantu anda dalam mewujudkan produk impian anda."
				></meta>
				<meta
					name="twitter:image"
					content="https://primaxcel.co.id/logogram.png"
				></meta>
				<meta name="twitter:site" content="@primaxcel_inv"></meta>
				<meta name="twitter:creator" content="@primaxcel_inv"></meta>
			</Head>
			<Flex
				as="section"
				maxW={{
					base: '100%',
					'2xl': 'container.xl',
				}}
				mt={{
					base: '56px',
					md: '65px',
				}}
				mx="auto"
			>
				<Image
					src="/faq/primaxcel-body-care.jpg"
					alt="Primaxcel body care set"
				></Image>
			</Flex>
			<Container
				maxW="container.xl"
				display="flex"
				mt={{
					base: '20px',
					md: '60px',
				}}
				mb={{
					base: '40px',
					md: '80px',
				}}
				justifyContent={{
					base: 'flex-start',
					md: 'space-between',
				}}
				flexDirection={{
					base: 'column',
					md: 'row',
				}}
			>
				<Flex
					flexDirection="column"
					width={{
						base: '100%',
						md: 'calc(50% - 32px)',
					}}
				>
					{LEFT_FAQ.map((faq, index) => (
						<Flex key={`faq-left-${index}`} flexDirection="column" mt="20px">
							<Text fontWeight="700" as="h2" fontSize="24px">
								{faq.title}
							</Text>
							<Text as="p" fontSize="16px" mt="12px" mb="0">
								{faq.description}
							</Text>
							<Text
								as="p"
								fontSize="16px"
								fontWeight="700"
								mt="8px"
								mb="0"
								onClick={onOpenFaq}
								cursor="pointer"
							>
								Selengkapnya
							</Text>
						</Flex>
					))}
				</Flex>
				<Flex
					flexDirection="column"
					width={{
						base: '100%',
						md: 'calc(50% - 32px)',
					}}
				>
					{RIGHT_FAQ.map((faq, index) => (
						<Flex key={`faq-right-${index}`} flexDirection="column" mt="20px">
							<Text fontWeight="700" as="h2" fontSize="24px">
								{faq.title}
							</Text>
							<Text as="p" fontSize="16px" mt="12px" mb="0">
								{faq.description}
							</Text>
							<Text
								as="p"
								fontSize="16px"
								fontWeight="700"
								mt="8px"
								mb="0"
								onClick={onOpenFaq}
								cursor="pointer"
							>
								Selengkapnya
							</Text>
						</Flex>
					))}
				</Flex>
			</Container>
		</>
	);
};

const getLayout = (page) => {
	return <MainLayout>{page}</MainLayout>;
};

Faq.getLayout = getLayout;

export default Faq;
