import api from './axios';

const getBlogs = ({ page, limit }) => {
	const basePath = '/blogs';
	let queries = [];

	for (const [key, value] of Object.entries({ page, limit })) {
		queries.push(`${key}=${value}`);
	}

	const path = `${basePath}?${queries.join('&')}`;
	return api.get(path);
};

const addBlog = (payload = {}) => {
	return api.post('/blogs', payload, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
};

const getDetailBlog = (id) => {
	return api.get(`/blogs/${id}`);
};

const deleteBlog = (id) => {
	return api.delete(`/blogs/${id}`);
};

const updateBlog = (id, payload = {}) => {
	return api.put(`/blogs/${id}`, payload, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
};

const blogServices = {
	addBlog,
	deleteBlog,
	getDetailBlog,
	getBlogs,
	updateBlog,
};

export default blogServices;
