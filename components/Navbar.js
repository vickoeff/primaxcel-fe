import {
	Container,
	Box,
	Button,
	HStack,
	Drawer,
	DrawerBody,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	Flex,
	Icon,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = (props) => {
	const { logo, links, ...rest } = props;
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();

	return (
		<Box
			position="fixed"
			top="0"
			left="0"
			w="full"
			bg="primaxWhite"
			boxShadow="lg"
			zIndex={1024}
			{...rest}
		>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton
						padding="0 !important"
						bg="none !important"
						color="gray.600"
						borderRadius="4px !important"
						_hover={{
							color: 'gray.600',
							bg: 'gray.200 !important',
						}}
					/>
					<DrawerBody>
						<Flex flexDirection="column" mt="20px">
							{links.map((link) => (
								<Link key={link.label} href={link.url}>
									<Button
										as="a"
										variant="link"
										role="link"
										fontWeight={400}
										textColor="primaxDarkPurple"
										display="flex"
										justifyContent="flex-start"
										fontSize="16px"
										mt="12px"
									>
										{link.label}
									</Button>
								</Link>
							))}
						</Flex>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
			<Container maxW="container.xl" py={{ base: '1', md: '2' }}>
				<Flex justifyContent="space-between" position="relative">
					<Link href="/">
						<Box cursor="pointer">
							<Image src={logo} alt="Primaxcel_logo" />
						</Box>
					</Link>
					<HStack gap={6} display={{ base: 'none', md: 'flex' }}>
						{links.map((link) => (
							<Link key={link.label} href={link.url}>
								<Button
									as="a"
									variant="link"
									role="link"
									fontWeight={400}
									textColor="primaxDarkPurple"
								>
									{link.label}
								</Button>
							</Link>
						))}
					</HStack>
					<Icon
						as={GiHamburgerMenu}
						display={{ base: 'block', md: 'none' }}
						fontSize="20px"
						cursor="pointer"
						pos="absolute"
						top="50%"
						right="0"
						transform="translate(0, -50%)"
						ref={btnRef}
						onClick={onOpen}
					/>
				</Flex>
			</Container>
		</Box>
	);
};

export default Navbar;
