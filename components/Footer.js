import { Container, Box, Flex, Button, VStack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Footer = (props) => {
	const router = useRouter();
	const { logo, faqLinks, sosmedLinks, ...rest } = props;

	const h3Style = {
		fontSize: '2xl',
		fontWeight: 600,
		textColor: 'primaxPurple',
		mb: 3,
	};

	const onGoToFaq = () => {
		router.push('/faq');
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
									onClick={onGoToFaq}
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
						</Flex>
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};

export default Footer;
