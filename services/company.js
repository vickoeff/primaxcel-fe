import api from './axios';

const getCompany = () => {
	return api.get('/company');
};

const updateCompany = (payload = {}) => {
	return api.put('/company/1', payload);
};

const companyServices = {
	getCompany,
	updateCompany,
};

export default companyServices;
