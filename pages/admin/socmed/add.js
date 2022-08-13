import AdminMain from '@/components/Admin/Layout/Main.js';
import Breadcrumb from '@/components/Admin/Breadcrumb';
import { ADD_SOCMED_NAVIGATIONS } from '@/constant/socmed';
import SocmedForm from '@/components/Admin/Socmed/SocmedForm';
import { useRouter } from 'next/router';
import services from '@/services';
import { useLoading } from '@/context/loading';
import { useToast } from '@chakra-ui/react';

const AddSocmed = () => {
	const router = useRouter();
	const toast = useToast();
	const { setLoading } = useLoading();

	const onAddSocmed = async (payload) => {
		setLoading(true);

		const formData = new FormData();

		formData.append('image', payload.file);
		formData.append('name', payload.name);
		formData.append('url', payload.url);
		formData.append('alt', payload.alt);

		try {
			const response = await services.addSocmed(formData);

			if (response && response.status && response.data) {
				toast({
					position: 'top',
					description: 'Social media created',
					status: 'success',
					duration: 3000,
				});

				setTimeout(() => {
					router.push('/admin/socmed');
				}, 500);
			}
		} catch (error) {
			toast({
				position: 'top',
				description: 'Failed to add social media',
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
				title="Add social media"
				navigations={ADD_SOCMED_NAVIGATIONS}
			></Breadcrumb>
			<SocmedForm onSubmitSocmed={onAddSocmed}></SocmedForm>
		</>
	);
};

const getLayout = (page) => {
	return <AdminMain>{page}</AdminMain>;
};

AddSocmed.getLayout = getLayout;

export default AddSocmed;
