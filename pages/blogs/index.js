import { Container, Flex, Image, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { MainLayout } from '@/components/Layouts';
import { useState } from 'react';
import { BLOG_CATEGORIES } from '@/constant/blogs';

const Blogs = () => {
	const [category, setCategory] = useState('');
	const [blogs, setBlogs] = useState([
		{
			id: 1,
		},
		{
			id: 2,
		},
		{
			id: 3,
		},
		{
			id: 4,
		},
	]);

	const onSetCategory = (type) => {
		setCategory(type);
	};

	return (
		<>
			<Head>
				<title>Primaxcel daily blogs</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="description"
					content="Kunjungi daily blog kami yang selalu terupdate dengan info info terbaru seputar produk kecantian dan makanan sehat."
				></meta>
				<meta name="robots" content="index,follow"></meta>
				<meta name="googlebot" content="index,follow"></meta>
				<meta property="og:type" content="website"></meta>
				<meta
					property="og:url"
					content="https://primaxcelinovasi.co.id/blogs"
				></meta>
				<meta property="og:title" content="Daily blog by Primaxcel"></meta>
				<meta
					property="og:description"
					content="Dapatkan info info terbaru seputar produk kecantian dan makanan sehat dari Primaxcel."
				></meta>
				{/* <meta property="og:image" content="LINK TO IMAGE"></meta> */}
				<meta name="twitter:title" content="Daily blog by Primaxcel"></meta>
				<meta
					name="twitter:description"
					content="Dapatkan info info terbaru seputar produk kecantian dan makanan sehat dari Primaxcel."
				></meta>
				{/* <meta name="twitter:image" content="LINK TO IMAGE"></meta> */}
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
					src="/blogs/primaxcel-natural-safe-care.jpg"
					alt="Primaxcel natural safe care set"
				></Image>
			</Flex>
			<Flex
				h="60px"
				bg="primaxLightBlue"
				overflow="auto"
				justifyContent={{
					base: 'flex-start',
					md: 'center',
				}}
			>
				<Flex as="ul">
					{BLOG_CATEGORIES.map((blogCategory, index) => (
						<Flex
							as="li"
							key={`category-${index}`}
							px="4"
							position="relative"
							alignItems="center"
							fontSize="20px"
							color={
								blogCategory.query === category ? 'primaxPurple' : 'inherit'
							}
							cursor="pointer"
							fontWeight={blogCategory.query === category ? '700' : '400'}
							onClick={() => onSetCategory(blogCategory.query)}
							whiteSpace="nowrap"
						>
							{blogCategory.text}
							{blogCategory.query === category ? (
								<Flex
									position="absolute"
									left="0"
									bottom="0"
									width="100%"
									height="3px"
									bg="primaxPurple"
								></Flex>
							) : null}
						</Flex>
					))}
				</Flex>
			</Flex>
			<Container
				maxW="container.xl"
				p={{
					'2xl': 0,
				}}
				display="flex"
				mt="20px"
				mb={{
					base: '40px',
					md: '80px',
				}}
				flexWrap="wrap"
			>
				{blogs.map((blog, index) => (
					<Flex
						w={{
							base: '100%',
							lg: 'calc(50% - 12px)',
							xl: 'calc(50% - 20px)',
						}}
						key={`blog-${index}`}
						mt={{
							base: '20px',
							lg: '40px',
						}}
						_even={{
							ml: {
								base: '0',
								lg: '12px',
								xl: '20px',
							},
						}}
						_odd={{
							mr: {
								base: '0',
								lg: '12px',
								xl: '20px',
							},
						}}
					>
						<Flex h="240px" w="240px" bg="gray.200"></Flex>
						<Flex flexDirection="column" ml="20px" flex="1">
							<Text as="h2" fontWeight={700} fontSize="20px" noOfLines={3}>
								Pertumbuhan bisnis skincare diperkirakan meningkat hingga 500%
								di tahun 2022
							</Text>
							<Text as="span" fontSize="16px" mt="4px">
								New Trend
							</Text>
							<Text as="p" fontSize="16px" noOfLines={3} mt="8px" mb="0">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</Text>
							<Flex
								flex="1"
								fontWeight={700}
								alignItems="flex-end"
								fontSize="18px"
								cursor="pointer"
							>
								Read more
							</Flex>
						</Flex>
					</Flex>
				))}
				{/* <Flex w="50%">
					<Flex h="240px" w="240px" border="1px solid red"></Flex>
					<Flex
						flexDirection="column"
						ml="20px"
						border="1px solid red"
						flex="1"
					></Flex>
				</Flex>
				<Flex w="50%">
					<Flex h="240px" w="240px" border="1px solid red"></Flex>
					<Flex
						flexDirection="column"
						ml="20px"
						border="1px solid red"
						flex="1"
					></Flex>
				</Flex> */}
			</Container>
		</>
	);
};

const getLayout = (page) => {
	return <MainLayout>{page}</MainLayout>;
};

Blogs.getLayout = getLayout;

export default Blogs;
