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
		formData.append('description', payload.description);
		formData.append('isActive', payload.isActive);
		formData.append('type', payload.type);

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
