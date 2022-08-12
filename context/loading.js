import { createContext, useContext, useState } from 'react';

const defaultLoadingState = {
	isLoading: false,
	setLoading: () => {},
};

const LoadingContext = createContext(defaultLoadingState);

const useLoading = () => {
	return useContext(LoadingContext);
};

const LoadingProvider = ({ children }) => {
	const [isLoading, setLoading] = useState(false);

	const value = { isLoading, setLoading };

	return (
		<LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
	);
};

export { useLoading, LoadingProvider };
