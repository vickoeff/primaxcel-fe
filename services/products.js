import api from './axios';

const getProducts = ({ page, limit, type }) => {
	const basePath = '/products';
	let queries = [];

	for (const [key, value] of Object.entries({ page, limit, type })) {
		if (value) {
			queries.push(`${key}=${value}`);
		}
	}

	const path = `${basePath}?${queries.join('&')}`;
	return api.get(path);
};

const addProduct = (payload = {}) => {
	return api.post('/products', payload, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
};

const getDetailProduct = (id) => {
	return api.get(`/products/${id}`);
};

const deleteProduct = (id) => {
	return api.delete(`/products/${id}`);
};

const updateProduct = (id, payload = {}) => {
	return api.put(`/products/${id}`, payload, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
};

const productServices = {
	addProduct,
	deleteProduct,
	getDetailProduct,
	getProducts,
	updateProduct,
};

export default productServices;
