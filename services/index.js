import companyServices from './company';
import usersServices from './users';
import socmedServices from './socmed';

const service = {
	...companyServices,
	...usersServices,
	...socmedServices,
};

export default service;
