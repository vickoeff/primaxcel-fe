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

						<HStack gap={24} mb={4} alignItems="start">
							<Box minW="220px">
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
									<ListItem>Face Mist</ListItem>
								</UnorderedList>
							</Box>
						</HStack>

						<HStack gap={24} mb={4} alignItems="start">
							<Box minW="220px">
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

						<HStack gap={24} alignItems="start">
							<Box minW="220px">
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
							HAIR & BODY CARE
						</Text>

						<HStack gap={24} mb={4} alignItems="start">
							<Box minW="220px">
								<Text
									as="h3"
									fontSize="2xl"
									fontWeight={500}
									color="primaxPurple"
								>
									Moisturizer
								</Text>

								<UnorderedList>
									<ListItem>Body Lotion</ListItem>
									<ListItem>Body Lotion + SPF</ListItem>
									<ListItem>Body Butter</ListItem>
									<ListItem>Body Cream</ListItem>
									<ListItem>Body Serum</ListItem>
									<ListItem>Body Oil</ListItem>
									<ListItem>Body Gel</ListItem>
									<ListItem>Body Mask</ListItem>
									<ListItem>Hand Cream</ListItem>
									<ListItem>Foot Cream</ListItem>
								</UnorderedList>
							</Box>
							<Box>
								<Text
									as="h3"
									fontSize="2xl"
									fontWeight={500}
									color="primaxPurple"
								>
									Body Care
								</Text>

								<UnorderedList>
									<ListItem>Shaving Cream</ListItem>
									<ListItem>Deodorant Spray</ListItem>
									<ListItem>Deodorant Cream</ListItem>
									<ListItem>Hair Removal Cream</ListItem>
									<ListItem>Feminine Wash</ListItem>
									<ListItem>Parfume</ListItem>
									<ListItem>Exfoliating Scrub</ListItem>
								</UnorderedList>
							</Box>
						</HStack>

						<HStack gap={24} mb={4} alignItems="start">
							<Box minW="220px">
								<Text
									as="h3"
									fontSize="2xl"
									fontWeight={500}
									color="primaxPurple"
								>
									Hair Care
								</Text>

								<UnorderedList>
									<ListItem>Shampoo</ListItem>
									<ListItem>Medicated Shampoo</ListItem>
									<ListItem>Conditioner</ListItem>
									<ListItem>Hair Mask</ListItem>
									<ListItem>Hair Spa</ListItem>
									<ListItem>Hair Creambath</ListItem>
									<ListItem>Hair Essence</ListItem>
									<ListItem>Hair Oil</ListItem>
									<ListItem>Hair Tonic</ListItem>
									<ListItem>Hair Mist</ListItem>
									<ListItem>Hair Volumizer</ListItem>
									<ListItem>Hair Spray</ListItem>
									<ListItem>Hair Styling (Gel - Mousse)</ListItem>
									<ListItem>Pomade</ListItem>
									<ListItem>Hair Color</ListItem>
								</UnorderedList>
							</Box>
							<Box>
								<Text
									as="h3"
									fontSize="2xl"
									fontWeight={500}
									color="primaxPurple"
								>
									Body Treatment
								</Text>

								<UnorderedList>
									<ListItem>Cellulite Cream </ListItem>
									<ListItem>Stretch Marks Cream </ListItem>
									<ListItem>Firming Cream</ListItem>
									<ListItem>Slimming Cream</ListItem>
									<ListItem>Essential Oil</ListItem>
									<ListItem>Brightening Cream</ListItem>
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
								src="/minimal-composition-beauty-products_2.png"
								alt="minimal-composition-beauty-products_2_image"
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
							PRODUK RUMAH TANGGA
						</Text>

						<HStack gap={24} mb={4} alignItems="start">
							<Box minW="220px">
								<Text
									as="h3"
									fontSize="2xl"
									fontWeight={500}
									color="primaxPurple"
								>
									Soap & Shampoo
								</Text>

								<UnorderedList>
									<ListItem>Hand Soap</ListItem>
									<ListItem>Liquid Body Wash</ListItem>
									<ListItem>Medicated Soap</ListItem>
									<ListItem>Shampoo</ListItem>
									<ListItem>Medicated Shampoo</ListItem>
								</UnorderedList>
							</Box>
							<Box>
								<Text
									as="h3"
									fontSize="2xl"
									fontWeight={500}
									color="primaxPurple"
								>
									Household Products
								</Text>

								<UnorderedList>
									<ListItem>Dish soap</ListItem>
									<ListItem>Detergent </ListItem>
									<ListItem>Bleach</ListItem>
									<ListItem>Fabric Softener</ListItem>
									<ListItem>Fabric Spray</ListItem>
									<ListItem>Pembersih Kamar Mandi</ListItem>
								</UnorderedList>
							</Box>
						</HStack>

						<HStack gap={24} mb={4} alignItems="start">
							<Box minW="220px">
								<Text
									as="h3"
									fontSize="2xl"
									fontWeight={500}
									color="primaxPurple"
								>
									Sanitizer
								</Text>

								<UnorderedList>
									<ListItem>Hand Sanitizer Spray</ListItem>
									<ListItem>Hand Sanitizer Gel</ListItem>
									<ListItem>Surface Sanitizer </ListItem>
									<ListItem>Antiseptic Spray</ListItem>
									<ListItem>Desinfectant Spray</ListItem>
									<ListItem>Surface Desinfectant</ListItem>
								</UnorderedList>
							</Box>
							<Box>
								<Text
									as="h3"
									fontSize="2xl"
									fontWeight={500}
									color="primaxPurple"
								>
									Others
								</Text>

								<UnorderedList>
									<ListItem>Perfume</ListItem>
									<ListItem>Eau de Toilette</ListItem>
									<ListItem>Eau de Colonge</ListItem>
									<ListItem>Body Mist</ListItem>
									<ListItem>Karbol</ListItem>
									<ListItem>Pengharum Ruangan</ListItem>
									<ListItem>Essential Oil</ListItem>
									<ListItem>Pembersih Kaca</ListItem>
									<ListItem>Drain Cleaner</ListItem>
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
								src="/front-view-natural-self-care-products-composition_2.png"
								alt="front-view-natural-self-care-products-composition_2_image"
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
