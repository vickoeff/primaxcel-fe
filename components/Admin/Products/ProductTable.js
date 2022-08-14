import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
	Image,
	Flex,
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverBody,
	Button,
	Box,
	Skeleton,
} from '@chakra-ui/react';
import { FaCaretDown } from 'react-icons/fa';
import { PRODUCT_TYPE } from '@/constant/products';

const ProductTable = ({ data, isLoading, onOpenDeleteModal, onEditAction }) => {
	return (
		<TableContainer whiteSpace="normal">
			<Table variant="simple">
				<Thead>
					<Tr>
						<Th padding="12px">Image</Th>
						<Th padding="12px">Title</Th>
						<Th padding="12px">Type</Th>
						<Th></Th>
					</Tr>
				</Thead>
				<Tbody>
					{isLoading ? (
						Array.from(Array(4), (_, index) => {
							return (
								<Tr key={`loading-tr-${index}`}>
									{Array.from(Array(4), (_, tdIndex) => {
										return (
											<Td
												padding="8px 12px"
												key={`loading-${index}-${tdIndex}`}
											>
												<Skeleton height="20px"></Skeleton>
											</Td>
										);
									})}
								</Tr>
							);
						})
					) : data.length ? (
						data.map((product, index) => {
							return (
								<Tr key={`product-${index}-${product.id}`}>
									<Td padding="8px 12px">
										<Flex
											as="div"
											width="50px"
											height="50px"
											borderRadius="4px"
											alignItems="center"
											justifyContent="center"
											bg="gray.100"
										>
											<Image
												src={product.imageUrl}
												alt="Product image"
												objectFit="contain"
											/>
										</Flex>
									</Td>
									<Td padding="8px 12px">{product.title}</Td>
									<Td padding="8px 12px">
										{PRODUCT_TYPE[product.type] || '-'}
									</Td>
									<Td padding="8px 12px" textAlign="right">
										<Popover placement="bottom-end">
											<PopoverTrigger>
												<Button
													padding="0 12px !important"
													borderRadius="4px !important"
													background="none !important"
													rightIcon={<FaCaretDown />}
													variant="outline"
													_hover={{
														bg: 'gray.100 !important',
														color: 'primaxPurple',
													}}
													color="primaxPurple"
												>
													Actions
												</Button>
											</PopoverTrigger>
											<PopoverContent width="150px">
												<PopoverBody padding="8px 0">
													<Flex as="ul" flexDirection="column" textAlign="left">
														<Box
															as="li"
															listStyleType="none"
															px={4}
															py={2}
															width="100%"
															cursor="pointer"
															_hover={{
																bg: 'gray.100',
															}}
															onClick={() => onEditAction(product.id)}
														>
															Edit
														</Box>
														<Box
															as="li"
															listStyleType="none"
															px={4}
															py={2}
															width="100%"
															cursor="pointer"
															_hover={{
																bg: 'gray.100',
															}}
															onClick={() => onOpenDeleteModal(product.id)}
														>
															Delete
														</Box>
													</Flex>
												</PopoverBody>
											</PopoverContent>
										</Popover>
									</Td>
								</Tr>
							);
						})
					) : (
						<Tr>
							<Td colSpan={6} textAlign="center">
								There is no data available
							</Td>
						</Tr>
					)}
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default ProductTable;
