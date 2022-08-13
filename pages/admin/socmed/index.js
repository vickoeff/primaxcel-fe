import { Button, useToast, Flex } from '@chakra-ui/react';
import AdminMain from '@/components/Admin/Layout/Main.js';
import Breadcrumb from '@/components/Admin/Breadcrumb';
import SocmedTable from '@/components/Admin/Socmed/SocmedTable';
import Pagination from '@/components/Admin/Pagination';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useLoading } from '@/context/loading';
import services from '@/services';

const Socmed = () => {
	const router = useRouter();
	const toast = useToast();
	const { isLoading, setLoading } = useLoading();
	const [socmeds, setSocmeds] = useState([]);
	const [pagination, setPagination] = useState({
		limit: 10,
		currentPage: 1,
		total: 1,
		totalPages: 1,
	});

	const getSocmeds = async () => {
		try {
			setLoading(true);

			const response = await services.getSocmeds({
				limit: pagination.limit,
				page: pagination.currentPage,
			});

			if (response && response.status && response.data) {
				const { data } = response.data;
				setSocmeds(data);

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
				description: 'Failed to get social media data',
				status: 'error',
				duration: 3000,
			});
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getSocmeds();
	}, [pagination.limit, pagination.currentPage]);

	const addSocmed = () => {
		router.push('/admin/socmed/add');
	};

	const onRowChange = (limit) => {
		setPagination({
			...pagination,
			limit,
			currentPage: 1,
		});
	};

	const onPageChange = (currentPage) => {
		setPagination({
			...pagination,
			currentPage,
		});
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
			<Flex as="section" pt={4} pb={10} px={6} flexDirection="column">
				<SocmedTable data={socmeds} isLoading={isLoading}></SocmedTable>
				<Pagination
					isLoading={isLoading}
					pagination={pagination}
					onRowChange={onRowChange}
					onPageChange={onPageChange}
				></Pagination>
			</Flex>
		</>
	);
};

const getLayout = (page) => {
	return <AdminMain>{page}</AdminMain>;
};

Socmed.getLayout = getLayout;

export default Socmed;
