import AdminMain from '@/components/Admin/Layout/Main.js';
import Breadcrumb from '@/components/Admin/Breadcrumb';
import { useRouter } from 'next/router';

const Company = () => {
	const router = useRouter();

	return (
		<>
			<Breadcrumb title="Company"></Breadcrumb>
			This is company
		</>
	);
};

const getLayout = (page) => {
	return <AdminMain>{page}</AdminMain>;
};

Company.getLayout = getLayout;

export default Company;
