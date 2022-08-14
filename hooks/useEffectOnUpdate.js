import { useEffect, useRef } from 'react';

const useEffectOnlyOnUpdate = (callback, dependencies) => {
	const didMount = useRef(false);

	useEffect(
		(...args) => {
			if (didMount.current) {
				return callback(...args);
			}

			didMount.current = true;
		},
		[...dependencies]
	);
};

export default useEffectOnlyOnUpdate;
