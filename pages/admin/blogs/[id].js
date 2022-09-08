import AdminMain from '@/components/Admin/Layout/Main.js';
import Breadcrumb from '@/components/Admin/Breadcrumb';
import { EDIT_BLOG_NAVIGATIONS, BLOG_TYPE_VALUE } from '@/constant/blogs';
import BlogForm from '@/components/Admin/Blogs/BlogForm';
import { useRouter } from 'next/router';
import services from '@/services';
import { useLoading } from '@/context/loading';
import { useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const EditBlog = () => {
	const { setLoading } = useLoading();
	const toast = useToast();
	const router = useRouter();
	const [editedId, setEditedId] = useState(null);
	const [blog, setBlog] = useState({
		image: '',
		title: '',
		isActive: '0',
		type: 'new_trend',
		preview: '',
	});
	const [sections, setSections] = useState([
		{
			description: '',
			imagePosition: '',
			image: '',
			imageFile: null,
			error: '',
		},
	]);

	useEffect(() => {
		if (!router.isReady) return;

		const { id } = router.query;

		setEditedId(id);

		const getBlogDetail = async () => {
			try {
				setLoading(true);

				const response = await services.getDetailBlog(id);

				if (response && response.status && response.data) {
					setBlog({
						image: response.data.imageName,
						title: response.data.title,
						isActive: response.data.isActive,
						type: BLOG_TYPE_VALUE[response.data.type] || 'new_trend',
						preview: response.data.imageUrl,
					});
					setSections(
						response.data.blogSections.map((section) => {
							return {
								description: section.description,
								imagePosition: section.imagePosition || '',
								image: section.imageName || '',
								imageFile: null,
								error: '',
							};
						})
					);
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

	const onEditBlog = async (payload) => {
		if (!editedId) return;

		setLoading(true);

		const formData = new FormData();

		if (payload.file) {
			formData.append('image', payload.file);
		}

		formData.append('title', payload.title);
		formData.append('isActive', payload.isActive);
		formData.append('type', payload.type);

		const sections = payload.sections.map((section) => {
			return {
				image: section.imageFile,
				imageName: section.image,
				imagePosition: section.imagePosition,
				description: section.description,
			};
		});

		for (const index = 0; index < sections.length; index++) {
			formData.append(
				`sections[${index}][description]`,
				sections[index].description
			);
			formData.append(`sections[${index}][imagePosition]`, 'left');
			formData.append(`sections[${index}][image]`, sections[index].image);
			formData.append(
				`sections[${index}][imageName]`,
				sections[index].imageName
			);
		}

		try {
			const response = await services.updateBlog(editedId, formData);

			if (response && response.status && response.data) {
				toast({
					position: 'top',
					description: 'Blog is updated',
					status: 'success',
					duration: 3000,
				});

				setTimeout(() => {
					router.push('/admin/blogs');
				}, 500);
			}
		} catch (error) {
			toast({
				position: 'top',
				description: 'Failed to update blog',
				status: 'error',
				duration: 3000,
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Breadcrumb
				title="Edit blog"
				navigations={EDIT_BLOG_NAVIGATIONS}
			></Breadcrumb>
			<BlogForm
				onSubmitBlog={onEditBlog}
				currentBlog={blog}
				currentSections={sections}
			></BlogForm>
		</>
	);
};

const getLayout = (page) => {
	return <AdminMain>{page}</AdminMain>;
};

EditBlog.getLayout = getLayout;

export default EditBlog;
