import companyServices from './company';
import usersServices from './users';
import socmedServices from './socmed';
import reviewServices from './reviews';
import blogServices from './blogs';

const service = {
	...companyServices,
	...usersServices,
	...socmedServices,
	...reviewServices,
	...blogServices,
};

export default service;
