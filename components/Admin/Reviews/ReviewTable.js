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

const ReviewTable = ({ data, isLoading, onOpenDeleteModal, onEditAction }) => {
	return (
		<TableContainer>
			<Table variant="simple">
				<Thead>
					<Tr>
						<Th padding="12px">Image</Th>
						<Th padding="12px">Description</Th>
						<Th padding="12px">Status</Th>
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
						data.map((review, index) => {
							return (
								<Tr key={`review-${index}-${review.id}`}>
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
												src={review.imageUrl}
												alt="Review image"
												objectFit="contain"
												w="100%"
												h="100%"
											/>
										</Flex>
									</Td>
									<Td padding="8px 12px">{review.description}</Td>
									<Td padding="8px 12px">
										{review.isActive ? 'Active' : 'Inactive'}
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
															onClick={() => onEditAction(review.id)}
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
															onClick={() => onOpenDeleteModal(review.id)}
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
							<Td colSpan={4} textAlign="center">
								There is no data available
							</Td>
						</Tr>
					)}
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default ReviewTable;
