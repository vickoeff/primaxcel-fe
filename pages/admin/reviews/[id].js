import AdminMain from '@/components/Admin/Layout/Main.js';
import Breadcrumb from '@/components/Admin/Breadcrumb';
import { EDIT_REVIEWS_NAVIGATIONS } from '@/constant/reviews';
import ReviewForm from '@/components/Admin/Reviews/ReviewForm';
import { useRouter } from 'next/router';
import services from '@/services';
import { useLoading } from '@/context/loading';
import { useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const EditReview = () => {
	const { setLoading } = useLoading();
	const toast = useToast();
	const router = useRouter();
	const [editedId, setEditedId] = useState(null);
	const [review, setReview] = useState({
		image: '',
		description: '',
		isActive: '1',
		order: '',
		preview: '',
	});

	useEffect(() => {
		if (!router.isReady) return;

		const { id } = router.query;

		setEditedId(id);

		const getReviewDetail = async () => {
			try {
				setLoading(true);

				const response = await services.getDetailReview(id);

				if (response && response.status && response.data) {
					setReview({
						image: response.data.imageName,
						description: response.data.description,
						isActive: response.data.isActive,
						order: response.data.order,
						preview: response.data.imageUrl,
					});
				}
			} catch (error) {
				toast({
					position: 'top',
					description: 'Failed to get review data',
					status: 'error',
					duration: 3000,
				});
				router.push('/admin/reviews');
			} finally {
				setLoading(false);
			}
		};

		getReviewDetail();
	}, [router.isReady]);

	const onEditReview = async (payload) => {
		if (!editedId) return;

		setLoading(true);

		const formData = new FormData();

		if (payload.file) {
			formData.append('image', payload.file);
		}

		formData.append('description', payload.description);
		formData.append('isActive', payload.isActive);
		formData.append('order', payload.order);

		try {
			const response = await services.updateReview(editedId, formData);

			if (response && response.status && response.data) {
				toast({
					position: 'top',
					description: 'Review updated',
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
				description: 'Failed to update review',
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
				title="Edit review"
				navigations={EDIT_REVIEWS_NAVIGATIONS}
			></Breadcrumb>
			<ReviewForm
				onSubmitReview={onEditReview}
				currentReview={review}
			></ReviewForm>
		</>
	);
};

const getLayout = (page) => {
	return <AdminMain>{page}</AdminMain>;
};

EditReview.getLayout = getLayout;

export default EditReview;
