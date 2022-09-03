import Navbar from '../Navbar';
import Footer from '../Footer';
import { navbarLinks } from '@/constant/navbar';
import { faqLinks } from '@/constant/footer';
import primaxcelLogo from '@/public/primaxcel_logo.svg';
import { useEffect, useState } from 'react';
import services from '@/services';
import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export const MainLayout = ({ children }) => {
	const toast = useToast();
	const [socmeds, setSocmeds] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const router = useRouter();

	const handleGoToFaq = () => {
		router.push('/faq');
	};

	const handleGoToSocmed = (url) => {
		window.open(url);
	};

	useEffect(() => {
		const getSocmeds = async () => {
			try {
				setIsLoading(true);

				const response = await services.getSocmeds({
					limit: 100,
					page: 1,
				});

				if (response && response.status && response.data) {
					const { data } = response.data;
					setSocmeds(data);
				}
			} catch (error) {
				toast({
					position: 'top',
					description: 'Failed to get social media data',
					status: 'error',
					duration: 3000,
				});
			} finally {
				setIsLoading(false);
			}
		};
		getSocmeds();
	}, []);

	return (
		<>
			<Navbar logo={primaxcelLogo} links={navbarLinks} />
			<main>{children}</main>
			<Footer
				faqLinks={faqLinks}
				socmeds={socmeds}
				isLoading={isLoading}
				handleGoToFaq={handleGoToFaq}
				handleGoToSocmed={handleGoToSocmed}
			/>
		</>
	);
};
