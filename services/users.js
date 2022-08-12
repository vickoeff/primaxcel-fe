import api from './axios';

const login = (payload = {}) => {
	return api.post('/users/login', payload);
};

const getProfile = () => {
	return api.get('/users/profile');
};

const usersServices = {
	getProfile,
	login,
};

export default usersServices;
