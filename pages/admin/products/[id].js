import AdminMain from '@/components/Admin/Layout/Main.js';
import Breadcrumb from '@/components/Admin/Breadcrumb';
import {
	EDIT_PRODUCT_NAVIGATIONS,
	PRODUCT_TYPE_VALUE,
} from '@/constant/products';
import ProductForm from '@/components/Admin/Products/ProductForm';
import { useRouter } from 'next/router';
import services from '@/services';
import { useLoading } from '@/context/loading';
import { useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const EditProduct = () => {
	const { setLoading } = useLoading();
	const toast = useToast();
	const router = useRouter();
	const [editedId, setEditedId] = useState(null);
	const [product, setProduct] = useState({
		image: '',
		title: '',
		type: 'produce',
		preview: '',
	});

	useEffect(() => {
		if (!router.isReady) return;

		const { id } = router.query;

		setEditedId(id);

		const getProductDetail = async () => {
			try {
				setLoading(true);

				const response = await services.getDetailProduct(id);

				if (response && response.status && response.data) {
					setProduct({
						image: response.data.imageName,
						title: response.data.title,
						type: PRODUCT_TYPE_VALUE[response.data.type] || 'produce',
						preview: response.data.imageUrl,
					});
				}
			} catch (error) {
				toast({
					position: 'top',
					description: 'Failed to get product data',
					status: 'error',
					duration: 3000,
				});
				router.push('/admin/products');
			} finally {
				setLoading(false);
			}
		};

		getProductDetail();
	}, [router.isReady]);

	const onEditProduct = async (payload) => {
		if (!editedId) return;

		setLoading(true);

		const formData = new FormData();

		if (payload.file) {
			formData.append('image', payload.file);
		}

		formData.append('title', payload.title);
		formData.append('type', payload.type);

		try {
			const response = await services.updateProduct(editedId, formData);

			if (response && response.status && response.data) {
				toast({
					position: 'top',
					description: 'Product is updated',
					status: 'success',
					duration: 3000,
				});

				setTimeout(() => {
					router.push('/admin/products');
				}, 500);
			}
		} catch (error) {
			toast({
				position: 'top',
				description: 'Failed to update product',
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
				title="Edit product"
				navigations={EDIT_PRODUCT_NAVIGATIONS}
			></Breadcrumb>
			<ProductForm
				onSubmitProduct={onEditProduct}
				currentProduct={product}
			></ProductForm>
		</>
	);
};

const getLayout = (page) => {
	return <AdminMain>{page}</AdminMain>;
};

EditProduct.getLayout = getLayout;

export default EditProduct;
