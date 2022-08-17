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
import BlogTable from '@/components/Admin/Blogs/BlogTable';
import BlogFilter from '@/components/Admin/Blogs/BlogFilter';
import useEffectOnlyOnUpdate from '@/hooks/useEffectOnUpdate';

const Blogs = () => {
	const router = useRouter();
	const toast = useToast();
	const [deletedId, setDeletedId] = useState(null);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { isLoading, setLoading } = useLoading();
	const [blogs, setBlogs] = useState([]);
	const { pagination, setPagination, onRowChange, onPageChange } =
		usePagination();
	const [filter, setFilter] = useState({
		type: '',
		status: '',
	});

	const getBlogs = async () => {
		try {
			setLoading(true);

			const response = await services.getBlogs({
				limit: pagination.limit,
				page: pagination.currentPage,
				...filter,
			});

			if (response && response.status && response.data) {
				const { data } = response.data;

				setBlogs(data);

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
				description: 'Failed to get blogs data',
				status: 'error',
				duration: 3000,
			});
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getBlogs();
	}, [pagination.limit, pagination.currentPage]);

	useEffectOnlyOnUpdate(() => {
		pagination.currentPage > 1 ? onPageChange(1) : getBlogs();
	}, [filter]);

	const addBlog = () => {
		router.push('/admin/blogs/add');
	};

	const onEditAction = (id) => {
		router.push(`/admin/blogs/${id}`);
	};

	const onOpenDeleteModal = (id) => {
		setDeletedId(id);
		onOpen();
	};

	const onCloseDeleteModal = () => {
		setDeletedId(null);
		onClose();
	};

	const onDeleteBlog = async () => {
		if (!deletedId) return;

		try {
			setLoading(true);

			const response = await services.deleteBlog(deletedId);

			if (response && response.status && response.data) {
				toast({
					position: 'top',
					description: 'Blog is deleted',
					status: 'success',
					duration: 3000,
				});
				setDeletedId(null);
				onClose();

				pagination.currentPage > 1 ? onPageChange(1) : getBlogs();
			}
		} catch (error) {
			toast({
				position: 'top',
				description: 'Failed to delete blog',
				status: 'error',
				duration: 3000,
			});
		} finally {
			setLoading(false);
		}
	};

	const onChangeFilter = (name, value) => {
		setFilter({
			...filter,
			[name]: value,
		});
	};

	return (
		<>
			<Breadcrumb title="Blog">
				<Button
					padding="12px !important"
					borderRadius="8px !important"
					_hover={{
						color: 'white',
					}}
					onClick={addBlog}
				>
					Add blog
				</Button>
			</Breadcrumb>
			<Flex as="section" pt={4} pb={10} px={6} flexDirection="column">
				<Flex mb={4}>
					<BlogFilter
						filter={filter}
						onChangeFilter={onChangeFilter}
					></BlogFilter>
				</Flex>
				<BlogTable
					data={blogs}
					isLoading={isLoading}
					onOpenDeleteModal={onOpenDeleteModal}
					onEditAction={onEditAction}
				></BlogTable>
				{blogs.length || isLoading ? (
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
					<ModalHeader>Delete blog</ModalHeader>
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
					<ModalBody>Are you sure to delete this blog?</ModalBody>
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
							onClick={onDeleteBlog}
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

Blogs.getLayout = getLayout;

export default Blogs;
