import { Button } from '@chakra-ui/react';
import AdminMain from '@/components/Admin/Layout/Main.js';
import Breadcrumb from '@/components/Admin/Breadcrumb';
import { useRouter } from 'next/router';

const Reviews = () => {
	const router = useRouter();

	const addReview = () => {
		router.push('/admin/reviews/add');
	};

	return (
		<>
			<Breadcrumb title="Reviews">
				<Button
					padding="12px !important"
					borderRadius="8px !important"
					onClick={addReview}
				>
					Add review
				</Button>
			</Breadcrumb>
			This is review
		</>
	);
};

const getLayout = (page) => {
	return <AdminMain>{page}</AdminMain>;
};

Reviews.getLayout = getLayout;

export default Reviews;
