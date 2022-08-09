import AdminMain from '@/components/Admin/Layout/Main.js';
import Breadcrumb from '@/components/Admin/Breadcrumb';
import { ADD_PRODUCT_NAVIGATIONS } from '@/constant/products';

const AddProduct = () => {
	return (
		<>
			<Breadcrumb
				title="Add product"
				navigations={ADD_PRODUCT_NAVIGATIONS}
			></Breadcrumb>
			This is add product
		</>
	);
};

const getLayout = (page) => {
	return <AdminMain>{page}</AdminMain>;
};

AddProduct.getLayout = getLayout;

export default AddProduct;
