import { Flex, FormControl, FormLabel, Select } from '@chakra-ui/react';

const ProductFilter = ({ typeFilter, onChangeTypeFilter }) => {
	const onChangeType = (event) => {
		onChangeTypeFilter(event.target.value);
	};

	return (
		<Flex>
			<FormControl>
				<FormLabel fontWeight={600} fontSize="14px" mb="0">
					Type
				</FormLabel>
				<Select
					name="type"
					value={typeFilter}
					mt={1}
					onChange={onChangeType}
					width="200px"
				>
					<option value="">All</option>
					<option value="produce">Produced</option>
					<option value="maklon">Maklon</option>
					<option value="household">Household</option>
					<option value="skincare">Skincare</option>
				</Select>
			</FormControl>
		</Flex>
	);
};

export default ProductFilter;
