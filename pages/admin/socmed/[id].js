import AdminMain from '@/components/Admin/Layout/Main.js';
import Breadcrumb from '@/components/Admin/Breadcrumb';
import { EDIT_SOCMED_NAVIGATIONS } from '@/constant/socmed';
import SocmedForm from '@/components/Admin/Socmed/SocmedForm';
import { useRouter } from 'next/router';
import services from '@/services';
import { useLoading } from '@/context/loading';
import { useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const EditSocmed = () => {
	const { setLoading } = useLoading();
	const toast = useToast();
	const router = useRouter();
	const [editedId, setEditedId] = useState(null);
	const [socmed, setSocmed] = useState({
		image: '',
		name: '',
		url: '',
		alt: '',
		order: '',
		preview: '',
	});

	useEffect(() => {
		if (!router.isReady) return;

		const { id } = router.query;

		setEditedId(id);

		const getSocmedDetail = async () => {
			try {
				setLoading(true);

				const response = await services.getDetailSocmed(id);

				if (response && response.status && response.data) {
					setSocmed({
						image: response.data.imageName,
						name: response.data.name,
						url: response.data.url,
						alt: response.data.alt,
						order: response.data.order,
						preview: response.data.imageUrl,
					});
				}
			} catch (error) {
				toast({
					position: 'top',
					description: 'Failed to get social media data',
					status: 'error',
					duration: 3000,
				});
				router.push('/admin/socmed');
			} finally {
				setLoading(false);
			}
		};

		getSocmedDetail();
	}, [router.isReady]);

	const onEditSocmed = async (payload) => {
		if (!editedId) return;

		setLoading(true);

		const formData = new FormData();

		if (payload.file) {
			formData.append('image', payload.file);
		}

		formData.append('name', payload.name);
		formData.append('url', payload.url);
		formData.append('alt', payload.alt);
		formData.append('order', payload.order);

		try {
			const response = await services.updateSocmed(editedId, formData);

			if (response && response.status && response.data) {
				toast({
					position: 'top',
					description: 'Social media updated',
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
				description: 'Failed to update social media',
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
				title="Edit social media"
				navigations={EDIT_SOCMED_NAVIGATIONS}
			></Breadcrumb>
			<SocmedForm
				onSubmitSocmed={onEditSocmed}
				currentSocmed={socmed}
			></SocmedForm>
		</>
	);
};

const getLayout = (page) => {
	return <AdminMain>{page}</AdminMain>;
};

EditSocmed.getLayout = getLayout;

export default EditSocmed;
