import { Flex, FormControl, FormLabel, Select } from '@chakra-ui/react';

const BlogFilter = ({ filter, onChangeFilter }) => {
	const onFilterChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;

		onChangeFilter(name, value);
	};

	return (
		<Flex>
			<FormControl>
				<FormLabel fontWeight={600} fontSize="14px" mb="0">
					Type
				</FormLabel>
				<Select
					name="type"
					value={filter.type}
					mt={1}
					onChange={onFilterChange}
					width="200px"
				>
					<option value="">All</option>
					<option value="new_trend">New trend</option>
					<option value="beauty_tips">Beauty tips</option>
					<option value="maklon">Maklon</option>
					<option value="online_marketing">Online marketing</option>
					<option value="company_updates">Company updates</option>
				</Select>
			</FormControl>
			<FormControl ml={4}>
				<FormLabel fontWeight={600} fontSize="14px" mb="0">
					Status
				</FormLabel>
				<Select
					name="status"
					value={filter.status}
					mt={1}
					onChange={onFilterChange}
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

export default BlogFilter;
