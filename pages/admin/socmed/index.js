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
import SocmedTable from '@/components/Admin/Socmed/SocmedTable';
import Pagination from '@/components/Admin/Pagination';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useLoading } from '@/context/loading';
import usePagination from '@/hooks/usePagination';
import services from '@/services';

const Socmed = () => {
	const router = useRouter();
	const toast = useToast();
	const [deletedId, setDeletedId] = useState(null);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { isLoading, setLoading } = useLoading();
	const [socmeds, setSocmeds] = useState([]);
	const { pagination, setPagination, onRowChange, onPageChange } =
		usePagination();

	const getSocmeds = async () => {
		try {
			setLoading(true);

			const response = await services.getSocmeds({
				limit: pagination.limit,
				page: pagination.currentPage,
			});

			if (response && response.status && response.data) {
				const { data } = response.data;
				setSocmeds(data);

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
				description: 'Failed to get social media data',
				status: 'error',
				duration: 3000,
			});
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getSocmeds();
	}, [pagination.limit, pagination.currentPage]);

	const addSocmed = () => {
		router.push('/admin/socmed/add');
	};

	const onEditAction = (id) => {
		router.push(`/admin/socmed/${id}`);
	};

	const onOpenDeleteModal = (id) => {
		setDeletedId(id);
		onOpen();
	};

	const onCloseDeleteModal = () => {
		setDeletedId(null);
		onClose();
	};

	const onDeleteSocmed = async () => {
		if (!deletedId) return;

		try {
			setLoading(true);

			const response = await services.deleteSocmed(deletedId);

			if (response && response.status && response.data) {
				toast({
					position: 'top',
					description: 'Social media is deleted',
					status: 'success',
					duration: 3000,
				});
				setDeletedId(null);
				onClose();

				pagination.currentPage > 1 ? onPageChange(1) : getSocmeds();
			}
		} catch (error) {
			toast({
				position: 'top',
				description: 'Failed to delete social media',
				status: 'error',
				duration: 3000,
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Breadcrumb title="Social media">
				<Button
					padding="12px !important"
					borderRadius="8px !important"
					onClick={addSocmed}
				>
					Add social media
				</Button>
			</Breadcrumb>
			<Flex as="section" pt={4} pb={10} px={6} flexDirection="column">
				<SocmedTable
					data={socmeds}
					isLoading={isLoading}
					onOpenDeleteModal={onOpenDeleteModal}
					onEditAction={onEditAction}
				></SocmedTable>
				{socmeds.length || isLoading ? (
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
					<ModalHeader>Delete social media</ModalHeader>
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
					<ModalBody>Are you sure to delete this social media?</ModalBody>
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
							onClick={onDeleteSocmed}
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

Socmed.getLayout = getLayout;

export default Socmed;
