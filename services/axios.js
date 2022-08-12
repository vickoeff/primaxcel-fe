import axios from 'axios';
import Cookies from 'js-cookie';
import Router from 'next/router';

const instance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_AXIOS_BASE_URL,
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

instance.interceptors.request.use(
	(config) => {
		const token = Cookies.get('access_token') || null;

		if (token && config.headers) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (401 === error.response.status) {
			Cookies.remove('access_token');
			Router.push('/admin');
		} else {
			return Promise.reject(error);
		}
	}
);

export default instance;
