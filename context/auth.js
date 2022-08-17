import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import services from '@/services';
import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const defaultAuthState = {
	user: {
		name: '',
	},
	setUser: () => {},
};

const AuthContext = createContext(defaultAuthState);

const useAuth = () => {
	return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
	const router = useRouter();
	const toast = useToast();
	const [user, setUser] = useState({
		name: '',
	});

	useEffect(() => {
		const getUserProfile = async () => {
			const token = Cookies.get('access_token') || null;

			if (token && !user.name) {
				try {
					const response = await services.getProfile();

					if (response && response.data && response.status) {
						setUser({
							name: response.data.name,
						});
					}
				} catch {
					toast({
						position: 'top',
						description: 'Failed to get user profile',
						status: 'error',
						duration: 3000,
					});
				}
			} else if (!token && !user) {
				router.push('/admin');
			}
		};

		if (router && router.pathname.includes('/admin')) {
			getUserProfile();
		}
	}, []);

	const value = { user, setUser };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { useAuth, AuthProvider };
