import api from './axios';

const login = (payload = {}) => {
	return api.post('/users/login', payload);
};

const getProfile = () => {
	return api.get('/users/profile');
};

const sendEmail = (payload) => {
	return api.post('/users/email', payload);
};

const usersServices = {
	getProfile,
	login,
	sendEmail,
};

export default usersServices;
