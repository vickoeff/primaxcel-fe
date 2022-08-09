import { Button } from '@chakra-ui/react';
import AdminMain from '@/components/Admin/Layout/Main.js';
import Breadcrumb from '@/components/Admin/Breadcrumb';
import { useRouter } from 'next/router';

const Blog = () => {
	const router = useRouter();

	const addBlog = () => {
		router.push('/admin/blogs/add');
	};

	return (
		<>
			<Breadcrumb title="Blogs">
				<Button borderRadius={0} onClick={addBlog}>
					Add blog
				</Button>
			</Breadcrumb>
			This is blog
		</>
	);
};

const getLayout = (page) => {
	return <AdminMain>{page}</AdminMain>;
};

Blog.getLayout = getLayout;

export default Blog;
