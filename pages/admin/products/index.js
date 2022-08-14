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
import ProductTable from '@/components/Admin/Products/ProductTable';
import ProductFilter from '@/components/Admin/Products/ProductFilter';
import useEffectOnlyOnUpdate from '@/hooks/useEffectOnUpdate';

const Products = () => {
	const router = useRouter();
	const toast = useToast();
	const [deletedId, setDeletedId] = useState(null);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { isLoading, setLoading } = useLoading();
	const [products, setProducts] = useState([]);
	const { pagination, setPagination, onRowChange, onPageChange } =
		usePagination();
	const [typeFilter, setTypeFilter] = useState('');

	const getProducts = async () => {
		try {
			setLoading(true);

			const response = await services.getProducts({
				limit: pagination.limit,
				page: pagination.currentPage,
				type: typeFilter,
			});

			if (response && response.status && response.data) {
				const { data } = response.data;

				setProducts(data);

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
				description: 'Failed to get products data',
				status: 'error',
				duration: 3000,
			});
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getProducts();
	}, [pagination.limit, pagination.currentPage]);

	useEffectOnlyOnUpdate(() => {
		pagination.currentPage > 1 ? onPageChange(1) : getProducts();
	}, [typeFilter]);

	const addProduct = () => {
		router.push('/admin/products/add');
	};

	const onEditAction = (id) => {
		router.push(`/admin/products/${id}`);
	};

	const onOpenDeleteModal = (id) => {
		setDeletedId(id);
		onOpen();
	};

	const onCloseDeleteModal = () => {
		setDeletedId(null);
		onClose();
	};

	const onDeleteProduct = async () => {
		if (!deletedId) return;

		try {
			setLoading(true);

			const response = await services.deleteProduct(deletedId);

			if (response && response.status && response.data) {
				toast({
					position: 'top',
					description: 'Product is deleted',
					status: 'success',
					duration: 3000,
				});
				setDeletedId(null);
				onClose();

				pagination.currentPage > 1 ? onPageChange(1) : getProducts();
			}
		} catch (error) {
			toast({
				position: 'top',
				description: 'Failed to delete product',
				status: 'error',
				duration: 3000,
			});
		} finally {
			setLoading(false);
		}
	};

	const onChangeTypeFilter = (type) => {
		setTypeFilter(type);
	};

	return (
		<>
			<Breadcrumb title="Product">
				<Button
					padding="12px !important"
					borderRadius="8px !important"
					onClick={addProduct}
				>
					Add product
				</Button>
			</Breadcrumb>
			<Flex as="section" pt={4} pb={10} px={6} flexDirection="column">
				<Flex mb={4}>
					<ProductFilter
						typeFilter={typeFilter}
						onChangeTypeFilter={onChangeTypeFilter}
					></ProductFilter>
				</Flex>
				<ProductTable
					data={products}
					isLoading={isLoading}
					onOpenDeleteModal={onOpenDeleteModal}
					onEditAction={onEditAction}
				></ProductTable>
				{products.length || isLoading ? (
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
					<ModalHeader>Delete product</ModalHeader>
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
					<ModalBody>Are you sure to delete this product?</ModalBody>
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
							onClick={onDeleteProduct}
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

Products.getLayout = getLayout;

export default Products;
