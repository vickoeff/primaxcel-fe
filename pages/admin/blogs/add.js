import AdminMain from '@/components/Admin/Layout/Main.js';
import Breadcrumb from '@/components/Admin/Breadcrumb';
import { ADD_BLOG_NAVIGATIONS } from '@/constant/blogs';
import BlogForm from '@/components/Admin/Blogs/BlogForm';
import { useRouter } from 'next/router';
import services from '@/services';
import { useLoading } from '@/context/loading';
import { useToast } from '@chakra-ui/react';

const AddBlog = () => {
	const router = useRouter();
	const toast = useToast();
	const { setLoading } = useLoading();

	const onAddBlog = async (payload) => {
		setLoading(true);

		const formData = new FormData();

		formData.append('image', payload.file);
		formData.append('title', payload.title);
		formData.append('isActive', payload.isActive);
		formData.append('type', payload.type);

		const sections = payload.sections.map((section) => {
			return {
				image: section.imageFile,
				imagePosition: section.imagePosition,
				description: section.description,
			};
		});

		for (const index = 0; index < sections.length; index++) {
			formData.append(
				`sections[${index}][description]`,
				sections[index].description
			);
			formData.append(
				`sections[${index}][imagePosition]`,
				sections[index].imagePosition
			);
			formData.append(`sections[${index}][image]`, sections[index].image);
		}

		try {
			const response = await services.addBlog(formData);

			if (response && response.status && response.data) {
				toast({
					position: 'top',
					description: 'Blog is created',
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
				description: 'Failed to add blog',
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
				title="Add blog"
				navigations={ADD_BLOG_NAVIGATIONS}
			></Breadcrumb>
			<BlogForm onSubmitBlog={onAddBlog}></BlogForm>
		</>
	);
};

const getLayout = (page) => {
	return <AdminMain>{page}</AdminMain>;
};

AddBlog.getLayout = getLayout;

export default AddBlog;
