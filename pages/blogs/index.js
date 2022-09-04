import {
	Container,
	Flex,
	Image,
	Text,
	useToast,
	Skeleton,
} from '@chakra-ui/react';
import Head from 'next/head';
import { MainLayout } from '@/components/Layouts';
import { BLOG_CATEGORIES, BLOG_TYPE } from '@/constant/blogs';
import { useEffect, useState } from 'react';
import services from '@/services';
import { useRouter } from 'next/router';
import Pagination from '@/components/Admin/Pagination';
import usePagination from '@/hooks/usePagination';

const Blogs = () => {
	const toast = useToast();
	const [blogs, setBlogs] = useState([]);
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);
	const { pagination, setPagination, onRowChange, onPageChange } =
		usePagination();
	const [filter, setFilter] = useState({
		type: '',
		status: 'active',
	});

	const getBlogs = async () => {
		try {
			setIsLoading(true);

			const response = await services.getBlogs({
				limit: pagination.limit,
				page: pagination.currentPage,
				...filter,
			});

			if (response && response.status && response.data) {
				const { data } = response.data;

				setBlogs(data);

				setPagination({
					...pagination,
					limit: response.data.limit,
					total: response.data.total,
					totalPages: response.data.totalPages,
					currentPage: response.data.currentPage,
				});
			}
		} catch (error) {
			toast({
				position: 'top',
				description: 'Failed to get blogs data',
				status: 'error',
				duration: 3000,
			});
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getBlogs();
	}, [pagination.limit, pagination.currentPage]);

	useEffect(() => {
		if (pagination.currentPage === 1) {
			getBlogs();
		} else {
			onPageChange(1);
		}
	}, [filter.type]);

	const onSetCategory = (type) => {
		setFilter({
			...filter,
			type,
		});
	};

	const onGoToDetailBlog = (id) => {
		router.push(`/blogs/${id}`);
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
								blogCategory.query === filter.type ? 'primaxPurple' : 'inherit'
							}
							cursor="pointer"
							fontWeight={blogCategory.query === filter.type ? '700' : '400'}
							onClick={() => onSetCategory(blogCategory.query)}
							whiteSpace="nowrap"
						>
							{blogCategory.text}
							{blogCategory.query === filter.type ? (
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
				{isLoading ? (
					Array.from(Array(4), (_, index) => {
						return (
							<Flex
								key={`blog-loading-${index}`}
								w={{
									base: '100%',
									lg: 'calc(50% - 12px)',
									xl: 'calc(50% - 20px)',
								}}
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
								<Skeleton w="240px" h="240px"></Skeleton>
								<Flex flexDirection="column" ml="20px" flex="1">
									<Skeleton w="100%" h="30px"></Skeleton>
									<Skeleton w="100%" h="30px" mt="1"></Skeleton>
									<Skeleton w="100px" h="20px" mt="2"></Skeleton>
									<Skeleton w="100%" h="20px" mt="5"></Skeleton>
									<Skeleton w="100%" h="20px" mt="2"></Skeleton>
									<Skeleton w="100%" h="20px" mt="2"></Skeleton>
									<Flex flex="1" alignItems="flex-end">
										<Skeleton w="120px" h="30px" mt="2"></Skeleton>
									</Flex>
								</Flex>
							</Flex>
						);
					})
				) : blogs.length ? (
					<>
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
								<Flex h="240px" w="240px" bg="gray.200">
									<Image
										objectFit="cover"
										src={blog.imageUrl}
										alt={blog.title}
									></Image>
								</Flex>
								<Flex flexDirection="column" ml="20px" flex="1">
									<Text as="h2" fontWeight={700} fontSize="20px" noOfLines={3}>
										{blog.title}
									</Text>
									<Text as="span" fontSize="16px" mt="4px">
										{BLOG_TYPE[blog.type]}
									</Text>
									<Text
										as="p"
										fontSize="16px"
										noOfLines={3}
										mt="8px"
										mb="0"
										className="blog-page-preview-title"
										dangerouslySetInnerHTML={{
											__html: blog.blogSections[0].description,
										}}
									></Text>
									<Flex
										flex="1"
										fontWeight={700}
										alignItems="flex-end"
										fontSize="18px"
										cursor="pointer"
										onClick={() => onGoToDetailBlog(blog.id)}
									>
										Read more
									</Flex>
								</Flex>
							</Flex>
						))}
						<Flex w="100%">
							<Pagination
								isLoading={isLoading}
								pagination={pagination}
								onRowChange={onRowChange}
								onPageChange={onPageChange}
							></Pagination>
						</Flex>
					</>
				) : (
					<Flex justifyContent="center" w="100%" mt="60px">
						<Text>Currently, there is no articles for this category</Text>
					</Flex>
				)}
			</Container>
		</>
	);
};

const getLayout = (page) => {
	return <MainLayout>{page}</MainLayout>;
};

Blogs.getLayout = getLayout;

export default Blogs;
