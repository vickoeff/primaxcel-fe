import { useState } from 'react';

const usePagination = () => {
	const [pagination, setPagination] = useState({
		limit: 10,
		currentPage: 1,
		total: 1,
		totalPages: 1,
	});

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

	return {
		pagination,
		onRowChange,
		onPageChange,
		setPagination,
	};
};

export default usePagination;
