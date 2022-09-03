import { BLOG_TYPE_VALUE, BLOG_CATEGORIES } from '@/constant/blogs';
import { useRouter } from 'next/router';
import services from '@/services';
import { MainLayout } from '@/components/Layouts';
import { useToast, Skeleton, Box, Image, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';

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

	useEffect(() => {
		if (!router.isReady) return;

		const { id } = router.query;

		const getBlogDetail = async () => {
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

		getBlogDetail();
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
					setFilter({
						...filter,
						type,
					});
					setDetail({
						...detail,
						blogSections: data[0].blogSections,
						imageUrl: data[0].imageUrl,
						title: data[0].title,
					});
				} else {
					setDetail({
						blogSections: [],
						imageUrl: '',
						title: '',
					});
				}
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
				minH="100vh"
			>
				<Box
					as="article"
					width={{
						base: 'calc(100% - 32px)',
						xl: '100%',
					}}
					margin="0 auto"
					className="ql-snow "
				>
					{isLoading ? (
						<Skeleton w="100%" h="500"></Skeleton>
					) : (
						<Box className="ql-editor">
							{detail.blogSections.length ? (
								detail.blogSections.map((section, index) => (
									<Box
										as="section"
										key={`key-section-${index}`}
										mt={index ? '16px' : 0}
										className="blog-preview"
									>
										{section.imageUrl ? (
											<Box
												maxWidth="50%"
												float={section.imagePosition}
												mr={section.imagePosition === 'left' ? '16px' : 0}
												ml={section.imagePosition === 'right' ? '16px' : 0}
												mb="16px"
											>
												<Image
													src={section.imageUrl}
													alt={`Section image ${index + 1}`}
												></Image>
											</Box>
										) : null}
										{index === 0 ? (
											<h1 className="blog-preview__title">{detail.title}</h1>
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
		</>
	);
};

const getLayout = (page) => {
	return <MainLayout>{page}</MainLayout>;
};

BlogDetail.getLayout = getLayout;

export default BlogDetail;
