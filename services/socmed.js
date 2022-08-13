import api from './axios';

const getSocmeds = ({ page, limit }) => {
	const basePath = '/socmeds';
	let queries = [];

	for (const [key, value] of Object.entries({ page, limit })) {
		queries.push(`${key}=${value}`);
	}

	const path = `${basePath}?${queries.join('&')}`;
	return api.get(path);
};

const addSocmed = (payload = {}) => {
	return api.post('/socmeds', payload, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
};

const getDetailSocmed = (id) => {
	return api.get(`/socmeds/${id}`);
};

const deleteSocmed = (id) => {
	return api.delete(`/socmeds/${id}`);
};

const updateSocmed = (id, payload = {}) => {
	return api.put(`/socmeds/${id}`, payload, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
};

const socmedServices = {
	addSocmed,
	deleteSocmed,
	getDetailSocmed,
	getSocmeds,
	updateSocmed,
};

export default socmedServices;
