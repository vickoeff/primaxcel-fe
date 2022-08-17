import { Box, Text, UnorderedList, ListItem, HStack } from '@chakra-ui/react';
import { SectionA, SectionB } from '@/components/Layouts';
import Image from 'next/image';
import { MainLayout } from '@/components/Layouts';

const SkinCare = () => {
	return (
		<>
			<SectionA
				pt="14rem"
				pb="4rem"
				bg="primaxLightBlue"
				alignItems="start"
				leftContent={
					<Box width="full">
						<Text
							as="h1"
							fontSize="6xl"
							fontWeight={700}
							mb={6}
							color="primaxDarkPurple"
						>
							FACE CARE
						</Text>

						<HStack gap={36} mb={4} alignItems="start">
							<Box minW="200px">
								<Text
									as="h3"
									fontSize="2xl"
									fontWeight={500}
									color="primaxPurple"
								>
									Cleanser
								</Text>

								<UnorderedList>
									<ListItem>Micellar Water</ListItem>
									<ListItem>Cleansing Water</ListItem>
									<ListItem>Cleansing Oil</ListItem>
									<ListItem>Cleansing Balm</ListItem>
									<ListItem>Cleansing Lotion</ListItem>
									<ListItem>Cleansing Cream</ListItem>
									<ListItem>Milk Cleanser</ListItem>
									<ListItem>Facial Wash</ListItem>
								</UnorderedList>
							</Box>
							<Box>
								<Text
									as="h3"
									fontSize="2xl"
									fontWeight={500}
									color="primaxPurple"
								>
									Toner
								</Text>

								<UnorderedList>
									<ListItem>Water Toner</ListItem>
									<ListItem>Hydrating Toner</ListItem>
									<ListItem>Alcohol-free Toner</ListItem>
									<ListItem>Calming Toner</ListItem>
									<ListItem>Medicated Toner</ListItem>
									<ListItem>Serum Toner</ListItem>
									<ListItem>Serum Toner </ListItem>
									<ListItem>Face Mist</ListItem>
								</UnorderedList>
							</Box>
						</HStack>

						<HStack gap={36} mb={4} alignItems="start">
							<Box minW="200px">
								<Text
									as="h3"
									fontSize="2xl"
									fontWeight={500}
									color="primaxPurple"
								>
									Serum
								</Text>

								<UnorderedList>
									<ListItem>Anti Acne Serum</ListItem>
									<ListItem>Anti Aging Serum</ListItem>
									<ListItem>Brightening Serum</ListItem>
									<ListItem>Hydrating Serum</ListItem>
									<ListItem>Exfoliating Serum</ListItem>
									<ListItem>Vitamin Serum</ListItem>
									<ListItem>Calming Serum</ListItem>
								</UnorderedList>
							</Box>
							<Box>
								<Text
									as="h3"
									fontSize="2xl"
									fontWeight={500}
									color="primaxPurple"
								>
									Moisturizer
								</Text>

								<UnorderedList>
									<ListItem>Day Cream</ListItem>
									<ListItem>Night Cream</ListItem>
									<ListItem>Face Oil</ListItem>
									<ListItem>Acne-prone Cream</ListItem>
									<ListItem>Dry-skin</ListItem>
									<ListItem>Medicated Moisturizer</ListItem>
									<ListItem>Oil-free Moisturizer</ListItem>
								</UnorderedList>
							</Box>
						</HStack>

						<HStack gap={36} alignItems="start">
							<Box minW="200px">
								<Text
									as="h3"
									fontSize="2xl"
									fontWeight={500}
									color="primaxPurple"
								>
									Treatment
								</Text>

								<UnorderedList>
									<ListItem>Spot Treatment</ListItem>
									<ListItem>Wrinkle Treatment</ListItem>
									<ListItem>Essence</ListItem>
									<ListItem>Ampoule</ListItem>
									<ListItem>Exfoliator</ListItem>
									<ListItem>Acne Treatment</ListItem>
									<ListItem>Peeling Solution</ListItem>
									<ListItem>Sunscreen Stick</ListItem>
									<ListItem>Sunscreen Spray</ListItem>
									<ListItem>Sunscreen Lotion</ListItem>
								</UnorderedList>
							</Box>
							<Box>
								<Text
									as="h3"
									fontSize="2xl"
									fontWeight={500}
									color="primaxPurple"
								>
									Mask
								</Text>

								<UnorderedList>
									<ListItem>Clay Mask</ListItem>
									<ListItem>Peel Off Mask</ListItem>
									<ListItem>Sleeping Mask</ListItem>
									<ListItem>Pudding Mask</ListItem>
								</UnorderedList>
							</Box>
						</HStack>
					</Box>
				}
				rightContent={
					<Box pos="relative">
						<Box
							pos="absolute"
							top="-2rem"
							right="0"
							w="calc(100% + 2rem)"
							h="100%"
							bg="primaxBlue"
						></Box>
						<Box pos="relative" width="100%" height="1015px">
							<Image
								src="/beauty-skincare-products-bathroom-3.png"
								alt="beauty-skincare-products_image"
								layout="fill"
							/>
						</Box>
					</Box>
				}
			/>

			<SectionA
				pt="14rem"
				pb="4rem"
				bg="primaxWhite"
				alignItems="start"
				leftContent={
					<Box width="full">
						<Text
							as="h1"
							fontSize="6xl"
							fontWeight={700}
							mb={6}
							color="primaxDarkPurple"
						>
							FACE CARE
						</Text>

						<HStack gap={36} mb={4} alignItems="start">
							<Box minW="200px">
								<Text
									as="h3"
									fontSize="2xl"
									fontWeight={500}
									color="primaxPurple"
								>
									Cleanser
								</Text>

								<UnorderedList>
									<ListItem>Micellar Water</ListItem>
									<ListItem>Cleansing Water</ListItem>
									<ListItem>Cleansing Oil</ListItem>
									<ListItem>Cleansing Balm</ListItem>
									<ListItem>Cleansing Lotion</ListItem>
									<ListItem>Cleansing Cream</ListItem>
									<ListItem>Milk Cleanser</ListItem>
									<ListItem>Facial Wash</ListItem>
								</UnorderedList>
							</Box>
							<Box>
								<Text
									as="h3"
									fontSize="2xl"
									fontWeight={500}
									color="primaxPurple"
								>
									Toner
								</Text>

								<UnorderedList>
									<ListItem>Water Toner</ListItem>
									<ListItem>Hydrating Toner</ListItem>
									<ListItem>Alcohol-free Toner</ListItem>
									<ListItem>Calming Toner</ListItem>
									<ListItem>Medicated Toner</ListItem>
									<ListItem>Serum Toner</ListItem>
									<ListItem>Serum Toner </ListItem>
									<ListItem>Face Mist</ListItem>
								</UnorderedList>
							</Box>
						</HStack>

						<HStack gap={36} mb={4} alignItems="start">
							<Box minW="200px">
								<Text
									as="h3"
									fontSize="2xl"
									fontWeight={500}
									color="primaxPurple"
								>
									Serum
								</Text>

								<UnorderedList>
									<ListItem>Anti Acne Serum</ListItem>
									<ListItem>Anti Aging Serum</ListItem>
									<ListItem>Brightening Serum</ListItem>
									<ListItem>Hydrating Serum</ListItem>
									<ListItem>Exfoliating Serum</ListItem>
									<ListItem>Vitamin Serum</ListItem>
									<ListItem>Calming Serum</ListItem>
								</UnorderedList>
							</Box>
							<Box>
								<Text
									as="h3"
									fontSize="2xl"
									fontWeight={500}
									color="primaxPurple"
								>
									Moisturizer
								</Text>

								<UnorderedList>
									<ListItem>Day Cream</ListItem>
									<ListItem>Night Cream</ListItem>
									<ListItem>Face Oil</ListItem>
									<ListItem>Acne-prone Cream</ListItem>
									<ListItem>Dry-skin</ListItem>
									<ListItem>Medicated Moisturizer</ListItem>
									<ListItem>Oil-free Moisturizer</ListItem>
								</UnorderedList>
							</Box>
						</HStack>

						<HStack gap={36} alignItems="start">
							<Box minW="200px">
								<Text
									as="h3"
									fontSize="2xl"
									fontWeight={500}
									color="primaxPurple"
								>
									Treatment
								</Text>

								<UnorderedList>
									<ListItem>Spot Treatment</ListItem>
									<ListItem>Wrinkle Treatment</ListItem>
									<ListItem>Essence</ListItem>
									<ListItem>Ampoule</ListItem>
									<ListItem>Exfoliator</ListItem>
									<ListItem>Acne Treatment</ListItem>
									<ListItem>Peeling Solution</ListItem>
									<ListItem>Sunscreen Stick</ListItem>
									<ListItem>Sunscreen Spray</ListItem>
									<ListItem>Sunscreen Lotion</ListItem>
								</UnorderedList>
							</Box>
							<Box>
								<Text
									as="h3"
									fontSize="2xl"
									fontWeight={500}
									color="primaxPurple"
								>
									Mask
								</Text>

								<UnorderedList>
									<ListItem>Clay Mask</ListItem>
									<ListItem>Peel Off Mask</ListItem>
									<ListItem>Sleeping Mask</ListItem>
									<ListItem>Pudding Mask</ListItem>
								</UnorderedList>
							</Box>
						</HStack>
					</Box>
				}
				rightContent={
					<Box pos="relative">
						<Box
							pos="absolute"
							top="-2rem"
							right="0"
							w="calc(100% + 2rem)"
							h="100%"
							bg="primaxBlue"
						></Box>
						<Box pos="relative" width="100%" height="1015px">
							<Image
								src="/beauty-skincare-products-bathroom-3.png"
								alt="beauty-skincare-products_image"
								layout="fill"
							/>
						</Box>
					</Box>
				}
			/>

			<SectionA
				pt="14rem"
				pb="4rem"
				bg="primaxLightBlue"
				alignItems="start"
				leftContent={
					<Box width="full">
						<Text
							as="h1"
							fontSize="6xl"
							fontWeight={700}
							mb={6}
							color="primaxDarkPurple"
						>
							FACE CARE
						</Text>

						<HStack gap={36} mb={4} alignItems="start">
							<Box minW="200px">
								<Text
									as="h3"
									fontSize="2xl"
									fontWeight={500}
									color="primaxPurple"
								>
									Cleanser
								</Text>

								<UnorderedList>
									<ListItem>Micellar Water</ListItem>
									<ListItem>Cleansing Water</ListItem>
									<ListItem>Cleansing Oil</ListItem>
									<ListItem>Cleansing Balm</ListItem>
									<ListItem>Cleansing Lotion</ListItem>
									<ListItem>Cleansing Cream</ListItem>
									<ListItem>Milk Cleanser</ListItem>
									<ListItem>Facial Wash</ListItem>
								</UnorderedList>
							</Box>
							<Box>
								<Text
									as="h3"
									fontSize="2xl"
									fontWeight={500}
									color="primaxPurple"
								>
									Toner
								</Text>

								<UnorderedList>
									<ListItem>Water Toner</ListItem>
									<ListItem>Hydrating Toner</ListItem>
									<ListItem>Alcohol-free Toner</ListItem>
									<ListItem>Calming Toner</ListItem>
									<ListItem>Medicated Toner</ListItem>
									<ListItem>Serum Toner</ListItem>
									<ListItem>Serum Toner </ListItem>
									<ListItem>Face Mist</ListItem>
								</UnorderedList>
							</Box>
						</HStack>

						<HStack gap={36} mb={4} alignItems="start">
							<Box minW="200px">
								<Text
									as="h3"
									fontSize="2xl"
									fontWeight={500}
									color="primaxPurple"
								>
									Serum
								</Text>

								<UnorderedList>
									<ListItem>Anti Acne Serum</ListItem>
									<ListItem>Anti Aging Serum</ListItem>
									<ListItem>Brightening Serum</ListItem>
									<ListItem>Hydrating Serum</ListItem>
									<ListItem>Exfoliating Serum</ListItem>
									<ListItem>Vitamin Serum</ListItem>
									<ListItem>Calming Serum</ListItem>
								</UnorderedList>
							</Box>
							<Box>
								<Text
									as="h3"
									fontSize="2xl"
									fontWeight={500}
									color="primaxPurple"
								>
									Moisturizer
								</Text>

								<UnorderedList>
									<ListItem>Day Cream</ListItem>
									<ListItem>Night Cream</ListItem>
									<ListItem>Face Oil</ListItem>
									<ListItem>Acne-prone Cream</ListItem>
									<ListItem>Dry-skin</ListItem>
									<ListItem>Medicated Moisturizer</ListItem>
									<ListItem>Oil-free Moisturizer</ListItem>
								</UnorderedList>
							</Box>
						</HStack>

						<HStack gap={36} alignItems="start">
							<Box minW="200px">
								<Text
									as="h3"
									fontSize="2xl"
									fontWeight={500}
									color="primaxPurple"
								>
									Treatment
								</Text>

								<UnorderedList>
									<ListItem>Spot Treatment</ListItem>
									<ListItem>Wrinkle Treatment</ListItem>
									<ListItem>Essence</ListItem>
									<ListItem>Ampoule</ListItem>
									<ListItem>Exfoliator</ListItem>
									<ListItem>Acne Treatment</ListItem>
									<ListItem>Peeling Solution</ListItem>
									<ListItem>Sunscreen Stick</ListItem>
									<ListItem>Sunscreen Spray</ListItem>
									<ListItem>Sunscreen Lotion</ListItem>
								</UnorderedList>
							</Box>
							<Box>
								<Text
									as="h3"
									fontSize="2xl"
									fontWeight={500}
									color="primaxPurple"
								>
									Mask
								</Text>

								<UnorderedList>
									<ListItem>Clay Mask</ListItem>
									<ListItem>Peel Off Mask</ListItem>
									<ListItem>Sleeping Mask</ListItem>
									<ListItem>Pudding Mask</ListItem>
								</UnorderedList>
							</Box>
						</HStack>
					</Box>
				}
				rightContent={
					<Box pos="relative">
						<Box
							pos="absolute"
							top="-2rem"
							right="0"
							w="calc(100% + 2rem)"
							h="100%"
							bg="primaxBlue"
						></Box>
						<Box pos="relative" width="100%" height="1015px">
							<Image
								src="/beauty-skincare-products-bathroom-3.png"
								alt="beauty-skincare-products_image"
								layout="fill"
							/>
						</Box>
					</Box>
				}
			/>
		</>
	);
};

const getLayout = (page) => {
	return <MainLayout>{page}</MainLayout>;
};

SkinCare.getLayout = getLayout;

export default SkinCare;
