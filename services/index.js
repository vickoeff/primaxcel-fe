import companyServices from './company';
import usersServices from './users';

const service = {
	...companyServices,
	...usersServices,
};

export default service;
