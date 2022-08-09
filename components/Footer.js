import {
	Container,
	Box,
	Flex,
	Button,
	VStack,
	HStack,
	Text,
} from '@chakra-ui/react';

const Footer = (props) => {
	const { logo, faqLinks, sosmedLinks, ...rest } = props;

	const h3Style = {
		fontSize: '2xl',
		fontWeight: 600,
		textColor: 'primaxPurple',
		mb: 3,
	};

	return (
		<Box bg="footer" boxShadow="lg" pb="6" {...rest}>
			<Container maxW="container.xl" pt="5" pb="2">
				<Flex justifyContent="space-between" gap={8}>
					<Box minW="30%">
						<Text as="h3" {...h3Style}>
							FAQ
						</Text>
						<VStack alignItems="start">
							{faqLinks.map((link, index) => (
								<Button
									as="a"
									variant="link"
									key={`link-${link.label}-${index}`}
									role="link"
									fontSize="lg"
									fontWeight={400}
									textColor="primaxDarkPurple"
								>
									{link.label}
								</Button>
							))}
						</VStack>
					</Box>

					<Box minW="35%">
						<Text as="h3" {...h3Style}>
							Visit Us
						</Text>
						<Text as="p" fontSize="lg">
							Jl. Serpong-Parung No.20, Curug, Kec. Gn. Sindur, Kabupaten Bogor,
							Jawa Barat 16340
						</Text>
					</Box>

					<Box minW="35%">
						<Text as="h3" {...h3Style}>
							Contact Us
						</Text>
						<HStack gap={4}>
							{sosmedLinks.map((link, index) => (
								<Button
									as="a"
									variant="link"
									key={`socmed-${link.label}-${index}`}
									role="link"
									minW={10}
									minH={10}
									fontSize="lg"
									fontWeight={400}
									color="footer"
									bg="white"
								>
									{link.label}
								</Button>
							))}
						</HStack>
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};

export default Footer;
