import { Flex, FormControl, FormLabel, Select } from '@chakra-ui/react';

const ReviewFilter = ({ statusFilter, onChangeStatusFilter }) => {
	const onChangeStatus = (event) => {
		onChangeStatusFilter(event.target.value);
	};

	return (
		<Flex>
			<FormControl>
				<FormLabel fontWeight={600} fontSize="14px" mb="0">
					Status
				</FormLabel>
				<Select
					name="status"
					value={statusFilter}
					mt={1}
					onChange={onChangeStatus}
					width="200px"
				>
					<option value="">All</option>
					<option value="inactive">Inactive</option>
					<option value="active">Active</option>
				</Select>
			</FormControl>
		</Flex>
	);
};

export default ReviewFilter;
