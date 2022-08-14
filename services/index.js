import companyServices from './company';
import usersServices from './users';
import socmedServices from './socmed';
import reviewServices from './reviews';

const service = {
	...companyServices,
	...usersServices,
	...socmedServices,
	...reviewServices,
};

export default service;
