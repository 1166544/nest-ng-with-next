import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const useCounter: any = (): any => {
	const count: any = useSelector((state: any) => state.count);
	const dispatch: any = useDispatch();
	const increment: any = (): any =>
		dispatch({
			type: 'INCREMENT'
		});
	const decrement: any = (): any =>
		dispatch({
			type: 'DECREMENT'
		});
	const reset: any = (): any =>
		dispatch({
			type: 'RESET'
		});

	return { count, increment, decrement, reset };
};

const Counter: any = (): any => {
	const { count, increment, decrement, reset } = useCounter();

	return (
		<div>
			<h1>
				Count: <span>{count}</span>
			</h1>
			<button onClick={increment}>+1</button>
			<button onClick={decrement}>-1</button>
			<button onClick={reset}>Reset</button>
		</div>
	);
};

export default Counter;
