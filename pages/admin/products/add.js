import AdminMain from '@/components/Admin/Layout/Main.js';
import Breadcrumb from '@/components/Admin/Breadcrumb';
import { ADD_PRODUCT_NAVIGATIONS } from '@/constant/products';
import ProductForm from '@/components/Admin/Products/ProductForm';
import { useRouter } from 'next/router';
import services from '@/services';
import { useLoading } from '@/context/loading';
import { useToast } from '@chakra-ui/react';

const AddProduct = () => {
	const router = useRouter();
	const toast = useToast();
	const { setLoading } = useLoading();

	const onAddProduct = async (payload) => {
		setLoading(true);

		const formData = new FormData();

		formData.append('image', payload.file);
		formData.append('title', payload.title);
		formData.append('type', payload.type);

		try {
			const response = await services.addProduct(formData);

			if (response && response.status && response.data) {
				toast({
					position: 'top',
					description: 'Product is created',
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
				description: 'Failed to add product',
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
				title="Add product"
				navigations={ADD_PRODUCT_NAVIGATIONS}
			></Breadcrumb>
			<ProductForm onSubmitProduct={onAddProduct}></ProductForm>
		</>
	);
};

const getLayout = (page) => {
	return <AdminMain>{page}</AdminMain>;
};

AddProduct.getLayout = getLayout;

export default AddProduct;
