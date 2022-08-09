import AdminMain from '@/components/Admin/Layout/Main.js';
import Breadcrumb from '@/components/Admin/Breadcrumb';
import { ADD_REVIEWS_NAVIGATIONS } from '@/constant/reviews';

const AddReview = () => {
	return (
		<>
			<Breadcrumb
				title="Add review"
				navigations={ADD_REVIEWS_NAVIGATIONS}
			></Breadcrumb>
			This is add review
		</>
	);
};

const getLayout = (page) => {
	return <AdminMain>{page}</AdminMain>;
};

AddReview.getLayout = getLayout;

export default AddReview;
