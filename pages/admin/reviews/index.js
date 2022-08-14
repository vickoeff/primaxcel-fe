import {
	Button,
	useToast,
	useDisclosure,
	Flex,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from '@chakra-ui/react';
import AdminMain from '@/components/Admin/Layout/Main.js';
import Breadcrumb from '@/components/Admin/Breadcrumb';
import Pagination from '@/components/Admin/Pagination';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useLoading } from '@/context/loading';
import usePagination from '@/hooks/usePagination';
import services from '@/services';
import ReviewTable from '@/components/Admin/Reviews/ReviewTable';

const Reviews = () => {
	const router = useRouter();
	const toast = useToast();
	const [deletedId, setDeletedId] = useState(null);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { isLoading, setLoading } = useLoading();
	const [reviews, setReviews] = useState([]);
	const { pagination, setPagination, onRowChange, onPageChange } =
		usePagination();

	const getReviews = async () => {
		try {
			setLoading(true);

			const response = await services.getReviews({
				limit: pagination.limit,
				page: pagination.currentPage,
			});

			if (response && response.status && response.data) {
				const { data } = response.data;

				setReviews(data);

				setPagination({
					...pagination,
					limit: response.data.limit,
					total: response.data.total,
					totalPages: response.data.totalPages,
					currentPage: response.data.currentPage,
				});
			}
		} catch (error) {
			toast({
				position: 'top',
				description: 'Failed to get reviews data',
				status: 'error',
				duration: 3000,
			});
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getReviews();
	}, [pagination.limit, pagination.currentPage]);

	const addReview = () => {
		router.push('/admin/reviews/add');
	};

	const onEditAction = (id) => {
		router.push(`/admin/reviews/${id}`);
	};

	const onOpenDeleteModal = (id) => {
		setDeletedId(id);
		onOpen();
	};

	const onCloseDeleteModal = () => {
		setDeletedId(null);
		onClose();
	};

	const onDeleteReview = async () => {
		if (!deletedId) return;

		try {
			setLoading(true);

			const response = await services.deleteReview(deletedId);

			if (response && response.status && response.data) {
				toast({
					position: 'top',
					description: 'Review is deleted',
					status: 'success',
					duration: 3000,
				});
				setDeletedId(null);
				onClose();

				pagination.currentPage > 1 ? onPageChange(1) : getReviews();
			}
		} catch (error) {
			toast({
				position: 'top',
				description: 'Failed to delete review',
				status: 'error',
				duration: 3000,
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Breadcrumb title="Review">
				<Button
					padding="12px !important"
					borderRadius="8px !important"
					onClick={addReview}
				>
					Add review
				</Button>
			</Breadcrumb>
			<Flex as="section" pt={4} pb={10} px={6} flexDirection="column">
				<ReviewTable
					data={reviews}
					isLoading={isLoading}
					onOpenDeleteModal={onOpenDeleteModal}
					onEditAction={onEditAction}
				></ReviewTable>
				{reviews.length || isLoading ? (
					<Pagination
						isLoading={isLoading}
						pagination={pagination}
						onRowChange={onRowChange}
						onPageChange={onPageChange}
					></Pagination>
				) : null}
			</Flex>
			<Modal isOpen={isOpen} onClose={onCloseDeleteModal}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Delete review</ModalHeader>
					<ModalCloseButton
						padding="0 !important"
						bg="none !important"
						color="gray.600"
						borderRadius="4px !important"
						_hover={{
							color: 'gray.600',
							bg: 'gray.200 !important',
						}}
					/>
					<ModalBody>Are you sure to delete this review?</ModalBody>
					<ModalFooter>
						<Button
							colorScheme="red"
							mr={3}
							padding="0 !important"
							bg="none !important"
							color="gray.600"
							variant="ghost"
							borderRadius="4px !important"
							_hover={{
								color: 'gray.600',
								bg: 'none !important',
							}}
							onClick={onCloseDeleteModal}
						>
							Close
						</Button>
						<Button
							colorScheme="red"
							mr={3}
							padding="8px 12px !important"
							bg="red.500 !important"
							color="white"
							borderRadius="4px !important"
							_hover={{
								color: 'white',
								bg: 'red.600 !important',
							}}
							onClick={onDeleteReview}
							isLoading={isLoading}
						>
							Delete
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

const getLayout = (page) => {
	return <AdminMain>{page}</AdminMain>;
};

Reviews.getLayout = getLayout;

export default Reviews;
