import { Button } from '@chakra-ui/react';
import AdminMain from '@/components/Admin/Layout/Main.js';
import Breadcrumb from '@/components/Admin/Breadcrumb';
import { useRouter } from 'next/router';

const Socmed = () => {
	const router = useRouter();

	const addSocmed = () => {
		router.push('/admin/socmed/add');
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
			This is social media
		</>
	);
};

const getLayout = (page) => {
	return <AdminMain>{page}</AdminMain>;
};

Socmed.getLayout = getLayout;

export default Socmed;
