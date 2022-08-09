import { Flex } from '@chakra-ui/react';
import { SIDEBAR_MENU, ACTIVE_MENU } from '@/constant/sidebar';
import { useRouter } from 'next/router';

const AdminSidebar = () => {
	const router = useRouter();

	const goToRoute = (url) => {
		if (!url) return;

		router.push(url);
	};

	return (
		<Flex
			top="56px"
			position="fixed"
			flexDirection="column"
			width="216px"
			height="calc(100% - 56px)"
			borderRight="1px solid #dfe6e9"
			padding="16px"
			bg="white"
		>
			<Flex as="ul" flexDirection="column">
				{SIDEBAR_MENU.map((menu, index) => {
					const pathname = router.pathname;
					const currentActivePath = ACTIVE_MENU[pathname];
					const isActive = menu.url === currentActivePath;

					return (
						<Flex
							as="li"
							key={`menu-${index}`}
							padding="8px 12px"
							borderRadius="8px"
							cursor="pointer"
							_hover={{
								background: 'primaxPurple',
								color: 'white',
							}}
							bg={isActive ? 'primaxPurple' : 'none'}
							color={isActive ? 'white' : 'inherit'}
							onClick={() => goToRoute(menu.url)}
						>
							{menu.title}
						</Flex>
					);
				})}
			</Flex>
		</Flex>
	);
};

export default AdminSidebar;
