import { Flex, Text, Select, Icon, Skeleton } from '@chakra-ui/react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Pagination = ({ pagination, onRowChange, onPageChange, isLoading }) => {
	const { limit, currentPage, total, totalPages } = pagination;

	const onTotalRowChange = (event) => {
		onRowChange(parseInt(event.target.value));
	};

	const onCurrentPageChange = (event) => {
		onPageChange(parseInt(event.target.value));
	};

	const onPrevPage = () => {
		if (currentPage === 1) return;

		const prev = currentPage - 1;
		onPageChange(prev);
	};

	const onNextPage = () => {
		if (currentPage === totalPages) return;

		const next = currentPage + 1;
		onPageChange(next);
	};

	const paginationInfoInterface = () => {
		const calculatedStartRow = (currentPage - 1) * limit + 1;
		const startRow = currentPage === 1 ? 1 : calculatedStartRow;
		let endRow = startRow + (limit - 1);
		endRow = endRow > total ? total : endRow;

		return `Showing ${startRow}-${endRow} of ${total}`;
	};

	return (
		<Flex mt={4} alignItems="center" justifyContent="space-between">
			<Flex alignItems="center">
				{isLoading ? (
					<Skeleton height="20px" width="300px"></Skeleton>
				) : (
					<>
						<Text as="span" fontSize="14px" color="gray.600">
							Rows per page
						</Text>
						<Select
							width="75px"
							size="sm"
							ml={2}
							value={limit}
							onChange={onTotalRowChange}
						>
							<option value={10}>10</option>
							<option value={20}>20</option>
							<option value={40}>30</option>
						</Select>
						<Text as="span" fontSize="14px" color="gray.600" ml={5}>
							{paginationInfoInterface()}
						</Text>
					</>
				)}
			</Flex>
			<Flex alignItems="center">
				{isLoading ? (
					<Skeleton height="20px" width="200px"></Skeleton>
				) : (
					<>
						<Select
							width="75px"
							size="sm"
							ml={2}
							value={currentPage}
							onChange={onCurrentPageChange}
						>
							{Array.from(Array(totalPages), (_, index) => {
								return <option key={`page-${index + 1}`}>{index + 1}</option>;
							})}
						</Select>
						<Text as="span" fontSize="14px" color="gray.600" ml={2}>
							of {totalPages} page
						</Text>
						<Flex
							alignItems="center"
							justifyContent="center"
							cursor="pointer"
							ml={4}
							onClick={onPrevPage}
						>
							<Icon as={BsChevronLeft} />
						</Flex>
						<Flex
							alignItems="center"
							justifyContent="center"
							cursor="pointer"
							ml={4}
							onClick={onNextPage}
						>
							<Icon as={BsChevronRight} />
						</Flex>
					</>
				)}
			</Flex>
		</Flex>
	);
};

export default Pagination;
