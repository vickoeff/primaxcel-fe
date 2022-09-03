import {
	Container,
	Box,
	Flex,
	Button,
	VStack,
	Text,
	Skeleton,
	Image,
} from '@chakra-ui/react';

const Footer = (props) => {
	const {
		faqLinks,
		socmeds,
		isLoading,
		handleGoToFaq,
		handleGoToSocmed,
		...rest
	} = props;

	const h3Style = {
		fontSize: '2xl',
		fontWeight: 600,
		textColor: 'primaxPurple',
		mb: 3,
	};

	return (
		<Box
			bg="footer"
			boxShadow="lg"
			pb="6"
			{...rest}
			display="flex"
			flexDirection={{
				base: 'column',
				md: 'row',
			}}
		>
			<Container maxW="container.xl" pt="5" pb="2">
				<Flex
					justifyContent={{
						base: 'flex-start',
						md: 'space-between',
					}}
					alignItems={{
						base: 'center',
						md: 'flex-start',
					}}
					gap={8}
					flexDirection={{
						base: 'column',
						md: 'row',
					}}
				>
					<Box
						textAlign={{
							base: 'center',
							md: 'left',
						}}
					>
						<Text as="h3" {...h3Style}>
							FAQ
						</Text>
						<VStack
							alignItems={{
								base: 'center',
								md: 'flex-start',
							}}
						>
							{faqLinks.map((link, index) => (
								<Button
									as="a"
									variant="link"
									key={`link-${link.label}-${index}`}
									role="link"
									fontSize="lg"
									fontWeight={400}
									textColor="primaxDarkPurple"
									onClick={handleGoToFaq}
								>
									{link.label}
								</Button>
							))}
						</VStack>
					</Box>

					<Box
						textAlign={{
							base: 'center',
							md: 'left',
						}}
						width={{
							base: '90%',
							md: '400px',
						}}
					>
						<Text as="h3" {...h3Style}>
							Visit Us
						</Text>
						<Text
							as="p"
							fontSize="lg"
							textAlign={{
								base: 'center',
								md: 'left',
							}}
						>
							Jl. Serpong-Parung No.20, Curug, Kec. Gn. Sindur, Kabupaten Bogor,
							Jawa Barat 16340
						</Text>
					</Box>

					<Box
						textAlign={{
							base: 'center',
							md: 'left',
						}}
					>
						<Text as="h3" {...h3Style}>
							Contact Us
						</Text>
						<Flex gap={4} flexWrap="wrap">
							{isLoading ? (
								Array.from(Array(4), (_, index) => {
									return (
										<Skeleton
											w="40px"
											h="40px"
											borderRadius="8px"
											key={`skeleton-${index}`}
										></Skeleton>
									);
								})
							) : socmeds.length ? (
								socmeds.map((socmed, index) => (
									<Flex
										w="40px"
										h="40px"
										borderRadius="8px"
										overflow="hidden"
										key={`socmed-${index}`}
										onClick={() => handleGoToSocmed(socmed.url)}
										cursor="pointer"
									>
										<Image
											src={socmed.imageUrl}
											alt={socmed.alt}
											objectFit="cover"
										></Image>
									</Flex>
								))
							) : (
								<Text
									as="p"
									fontSize="lg"
									textAlign={{
										base: 'center',
										md: 'left',
									}}
								>
									We will update our social media later
								</Text>
							)}
						</Flex>
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};

export default Footer;
