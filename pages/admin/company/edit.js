import AdminMain from '@/components/Admin/Layout/Main.js';
import Breadcrumb from '@/components/Admin/Breadcrumb';
import { ADD_SOCMED_NAVIGATIONS } from '@/constant/socmed';

const AddSocmed = () => {
	return (
		<>
			<Breadcrumb
				title="Add social media"
				navigations={ADD_SOCMED_NAVIGATIONS}
			></Breadcrumb>
			This is add social media
		</>
	);
};

const getLayout = (page) => {
	return <AdminMain>{page}</AdminMain>;
};

AddSocmed.getLayout = getLayout;

export default AddSocmed;
