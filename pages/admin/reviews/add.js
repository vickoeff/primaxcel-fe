import AdminMain from '@/components/Admin/Layout/Main.js';
import Breadcrumb from '@/components/Admin/Breadcrumb';
import { ADD_REVIEWS_NAVIGATIONS } from '@/constant/reviews';
import ReviewForm from '@/components/Admin/Reviews/ReviewForm';
import { useRouter } from 'next/router';
import services from '@/services';
import { useLoading } from '@/context/loading';
import { useToast } from '@chakra-ui/react';

const AddReview = () => {
	const router = useRouter();
	const toast = useToast();
	const { setLoading } = useLoading();

	const onAddReview = async (payload) => {
		setLoading(true);

		const formData = new FormData();

		formData.append('image', payload.file);
		formData.append('description', payload.description);
		formData.append('isActive', payload.isActive);

		try {
			const response = await services.addReview(formData);

			if (response && response.status && response.data) {
				toast({
					position: 'top',
					description: 'Review is created',
					status: 'success',
					duration: 3000,
				});

				setTimeout(() => {
					router.push('/admin/reviews');
				}, 500);
			}
		} catch (error) {
			toast({
				position: 'top',
				description: 'Failed to add review',
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
				title="Add review"
				navigations={ADD_REVIEWS_NAVIGATIONS}
			></Breadcrumb>
			<ReviewForm onSubmitReview={onAddReview}></ReviewForm>
		</>
	);
};

const getLayout = (page) => {
	return <AdminMain>{page}</AdminMain>;
};

AddReview.getLayout = getLayout;

export default AddReview;
