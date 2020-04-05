import { useEffect, useRef } from 'react';

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
const useInterval: any = (callback: any, delay: number | null): any => {
	const savedCallback: any = useRef();
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);
	useEffect((): any => {
		const handler: any = (...args: any[]): any => savedCallback.current(...args);

		if (delay !== null) {
			const id: any = setInterval(handler, delay);

			return (): any => clearInterval(id);
		}
	}, [delay]);
};

export default useInterval;
