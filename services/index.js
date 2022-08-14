import companyServices from './company';
import usersServices from './users';
import socmedServices from './socmed';
import reviewServices from './reviews';
import blogServices from './blogs';
import productServices from './products';

const service = {
	...companyServices,
	...usersServices,
	...socmedServices,
	...reviewServices,
	...blogServices,
	...productServices,
};

export default service;
