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

const deleteSocmed = (id) => {
	return api.delete(`/socmeds/${id}`);
};

const socmedServices = {
	addSocmed,
	deleteSocmed,
	getSocmeds,
};

export default socmedServices;
