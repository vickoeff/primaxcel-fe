import api from './axios';

const getReviews = ({ page, limit }) => {
	const basePath = '/reviews';
	let queries = [];

	for (const [key, value] of Object.entries({ page, limit })) {
		queries.push(`${key}=${value}`);
	}

	const path = `${basePath}?${queries.join('&')}`;
	return api.get(path);
};

const addReview = (payload = {}) => {
	return api.post('/reviews', payload, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
};

const getDetailReview = (id) => {
	return api.get(`/reviews/${id}`);
};

const deleteReview = (id) => {
	return api.delete(`/reviews/${id}`);
};

const updateReview = (id, payload = {}) => {
	return api.put(`/reviews/${id}`, payload, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
};

const reviewServices = {
	addReview,
	deleteReview,
	getDetailReview,
	getReviews,
	updateReview,
};

export default reviewServices;
