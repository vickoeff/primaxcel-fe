import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useLoading } from '@/context/loading';
import { useToast, Box, Image, Text, Flex } from '@chakra-ui/react';
import services from '@/services';
import Loading from '@/components/Admin/Loading';
import 'react-quill/dist/quill.snow.css';

const BlogPreview = () => {
	const { setLoading, isLoading } = useLoading();
	const toast = useToast();
	const router = useRouter();
	const [blog, setBlog] = useState({
		blogSections: [],
		imageUrl: '',
		title: '',
	});

	useEffect(() => {
		if (!router.isReady) return;

		const { id } = router.query;

		const getBlogDetail = async () => {
			try {
				setLoading(true);

				const response = await services.getDetailBlog(id);

				if (response && response.status && response.data) {
					setBlog({
						...blog,
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
				router.push('/admin/blogs');
			} finally {
				setLoading(false);
			}
		};

		getBlogDetail();
	}, [router.isReady]);

	return isLoading ? (
		<Loading></Loading>
	) : (
		<Box as="article" width="85%" margin="0 auto" className="ql-snow ">
			<Box className="ql-editor">
				<Flex mb="24px" justifyContent="center">
					<Text
						className="blog-preview__title"
						as="h1"
						fontWeight={600}
						textAlign="center"
					>
						{blog.title}
					</Text>
				</Flex>
				{blog.blogSections.map((section, index) => (
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
						{index === 0 ? (
							<h1 className="blog-preview__title">{blog.title}</h1>
						) : null}
						<Box
							dangerouslySetInnerHTML={{ __html: section.description }}
							className="blog-preview__container"
						/>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default BlogPreview;
