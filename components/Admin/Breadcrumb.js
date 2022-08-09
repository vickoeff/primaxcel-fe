import { useRouter } from 'next/router';
import { Flex, Text, Box } from '@chakra-ui/react';
import React from 'react';

const Breadcrumb = ({ navigations = [], children, title }) => {
	const router = useRouter();

	const goToRoute = (route) => {
		if (route) {
			router.push(route);
		}
	};

	const navigationsInterface = (
		<Flex alignItems="center">
			{navigations.map((navigation, index) => {
				const isLastNavigation = index + 1 < navigations.length;
				const pathStyle = {
					fontSize: '12px',
					lineHeight: '16px',
					color: 'primaxGray.700',
					cursor: !!navigation.url ? 'pointer' : 'context',
					textDecoration: !!navigation.url ? 'underline' : 'none',
				};

				return (
					<React.Fragment key={`path-${index}-${navigation.name}`}>
						<Box
							as="span"
							onClick={() => goToRoute(navigation.url)}
							key={`path-${index}-${navigation.name}`}
							{...pathStyle}
						>
							{navigation.name}
						</Box>
						{isLastNavigation ? (
							<Box
								as="span"
								fontSize="12px"
								mx="4px"
								lineHeight="16px"
								color="primaxGray.700"
							>
								/
							</Box>
						) : null}
					</React.Fragment>
				);
			})}
		</Flex>
	);

	return (
		<Flex
			alignItems="center"
			justifyContent="space-between"
			height="72px"
			padding="0 24px"
			borderBottom="1px solid #dfe6e9"
			bg="primaxGray.100"
		>
			<Flex flexDirection="column">
				{navigations.length ? navigationsInterface : null}
				<Text as="span" fontWeight={600} fontSize="24px" lineHeight="32px">
					{title}
				</Text>
			</Flex>
			<Flex>{children}</Flex>
		</Flex>
	);
};

export default Breadcrumb;
