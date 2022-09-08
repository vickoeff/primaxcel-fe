import { BLOG_TYPE_VALUE, BLOG_CATEGORIES } from '@/constant/blogs';
import { useRouter } from 'next/router';
import services from '@/services';
import { MainLayout } from '@/components/Layouts';
import {
	useToast,
	Skeleton,
	Box,
	Image,
	Flex,
	Text,
	Icon,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const BlogDetail = () => {
	const toast = useToast();
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);
	const [detail, setDetail] = useState({
		blogSections: [],
		imageUrl: '',
		title: '',
	});
	const [filter, setFilter] = useState({
		type: '',
		status: 'active',
	});
	const [other, setOthers] = useState({
		prev: null,
		next: null,
	});

	const getBlogDetail = async (id) => {
		try {
			setIsLoading(true);

			const response = await services.getDetailBlog(id);

			if (response && response.status && response.data) {
				setFilter({
					...filter,
					type: BLOG_TYPE_VALUE[response.data.type],
				});
				setDetail({
					...detail,
					blogSections: response.data.blogSections,
					imageUrl: response.data.imageUrl,
					title: response.data.title,
				});
				setOthers({
					prev: response.data.prev,
					next: response.data.next,
				});
			}
		} catch (error) {
			toast({
				position: 'top',
				description: 'Failed to get blog data',
				status: 'error',
				duration: 3000,
			});
			router.push('/blogs');
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (!router.isReady) return;

		const { id } = router.query;

		getBlogDetail(id);
	}, [router.isReady]);

	const onSetCategory = async (type) => {
		try {
			setIsLoading(true);

			const response = await services.getBlogs({
				limit: 1000,
				page: 1,
				type: type,
				status: 'active',
			});

			if (response && response.status && response.data) {
				const { data } = response.data;

				if (data.length) {
					const id = data[0].id;
					router.push(`/blogs/${id}`);
					getBlogDetail(id);
				} else {
					setDetail({
						blogSections: [],
						imageUrl: '',
						title: '',
					});
					setOthers({
						prev: null,
						next: null,
					});
				}

				setFilter({
					...filter,
					type,
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

	const onGoToArticle = (type) => {
		let id = null;

		if (type === 'prev') {
			id = other.prev?.id ?? '';
		} else {
			id = other.next?.id ?? '';
		}

		if (id) {
			router.push(`/blogs/${id}`);
			getBlogDetail(id);
		}
	};

	return (
		<>
			<Flex
				mt={{
					base: '56px',
					md: '65px',
				}}
				h="60px"
				bg="primaxLightBlue"
				overflow="auto"
				justifyContent={{
					base: 'flex-start',
					md: 'center',
				}}
			>
				<Flex as="ul">
					{BLOG_CATEGORIES.filter((category) => category.query).map(
						(blogCategory, index) => (
							<Flex
								as="li"
								key={`category-${index}`}
								px="4"
								position="relative"
								alignItems="center"
								fontSize="20px"
								color={
									blogCategory.query === filter.type
										? 'primaxPurple'
										: 'inherit'
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
						)
					)}
				</Flex>
			</Flex>
			<Flex
				maxW="container.xl"
				flexDirection="column"
				mx="auto"
				pt="40px"
				pb="80px"
				minH="80vh"
			>
				<Box
					as="article"
					width={{
						base: 'calc(100% - 32px)',
						md: '750px',
						xl: '850px',
					}}
					margin="0 auto"
					className="ql-snow"
				>
					{isLoading ? (
						<Skeleton w="100%" h="500"></Skeleton>
					) : (
						<Box className="ql-editor">
							<Flex mb="24px" justifyContent="center">
								<Text
									className="blog-preview__title"
									as="h1"
									fontWeight={600}
									textAlign="center"
								>
									{detail.title}
								</Text>
							</Flex>

							{detail.blogSections.length ? (
								detail.blogSections.map((section, index) => (
									<Box
										as="section"
										key={`key-section-${index}`}
										mt={index ? '16px' : 0}
										className="blog-preview"
									>
										{section.imageUrl ? (
											<Box mb="24px">
												<Image
													src={section.imageUrl}
													alt={`Section image ${index + 1}`}
												></Image>
											</Box>
										) : null}
										<Box
											dangerouslySetInnerHTML={{ __html: section.description }}
											className="blog-preview__container"
										/>
									</Box>
								))
							) : (
								<Flex justifyContent="center" w="100%">
									<Text>Currently, there is no articles for this category</Text>
								</Flex>
							)}
						</Box>
					)}
				</Box>
			</Flex>
			<Flex
				justifyContent="space-between"
				maxW="container.xl"
				mx="auto"
				width={{
					base: 'calc(100% - 32px)',
					xl: '100%',
				}}
				mb="20px"
			>
				<Flex
					flexDirection="column"
					w="200px"
					cursor="pointer"
					onClick={() => onGoToArticle('prev')}
				>
					{other.prev ? (
						<>
							<Flex justifyContent="space-between" alignItems="center">
								<Icon as={FaArrowLeft}></Icon>
								<Text
									as="span"
									className="blog-page-preview-title"
									mb="0"
									fontSize="16px"
									fontWeight={700}
									color="primaxPurple"
									textAlign="left"
									noOfLines={3}
								>
									Previous Page
								</Text>
							</Flex>
							<Text
								className="blog-page-preview-title"
								mb="0"
								fontSize="14px"
								textAlign="right"
								noOfLines={3}
							>
								{other.prev.title}
							</Text>
						</>
					) : null}
				</Flex>
				<Flex
					flexDirection="column"
					w="200px"
					cursor="pointer"
					onClick={() => onGoToArticle('next')}
				>
					{other.next ? (
						<>
							<Flex justifyContent="space-between" alignItems="center">
								<Text
									as="span"
									className="blog-page-preview-title"
									mb="0"
									fontSize="16px"
									fontWeight={700}
									color="primaxPurple"
									textAlign="left"
									noOfLines={3}
								>
									Next Page
								</Text>
								<Icon as={FaArrowRight}></Icon>
							</Flex>
							<Text
								className="blog-page-preview-title"
								mb="0"
								fontSize="14px"
								textAlign="left"
								noOfLines={3}
							>
								{other.next.title}
							</Text>
						</>
					) : null}
				</Flex>
			</Flex>
		</>
	);
};

const getLayout = (page) => {
	return <MainLayout>{page}</MainLayout>;
};

BlogDetail.getLayout = getLayout;

export default BlogDetail;
