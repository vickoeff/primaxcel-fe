import { Button } from '@chakra-ui/react';
import AdminMain from '@/components/Admin/Layout/Main.js';
import Breadcrumb from '@/components/Admin/Breadcrumb';
import { useRouter } from 'next/router';

const Products = () => {
	const router = useRouter();

	const addProduct = () => {
		router.push('/admin/products/add');
	};

	return (
		<>
			<Breadcrumb title="Products">
				<Button
					padding="12px !important"
					borderRadius="8px !important"
					onClick={addProduct}
				>
					Add product
				</Button>
			</Breadcrumb>
			This is product
		</>
	);
};

const getLayout = (page) => {
	return <AdminMain>{page}</AdminMain>;
};

Products.getLayout = getLayout;

export default Products;
