import AdminMain from '@/components/Admin/Layout/Main.js';
import Breadcrumb from '@/components/Admin/Breadcrumb';
import { ADD_BLOG_NAVIGATIONS } from '@/constant/blogs';

const AddBlog = () => {
	return (
		<>
			<Breadcrumb
				title="Add blog"
				navigations={ADD_BLOG_NAVIGATIONS}
			></Breadcrumb>
			This is add blog
		</>
	);
};

const getLayout = (page) => {
	return <AdminMain>{page}</AdminMain>;
};

AddBlog.getLayout = getLayout;

export default AddBlog;
