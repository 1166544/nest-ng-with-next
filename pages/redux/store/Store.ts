import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState: any = {
	lastUpdate: 0,
	light: false,
	count: 0
};

const reducer: any = (state = initialState, action: any): any => {
	switch (action.type) {
		case 'TICK':
			return {
				...state,
				lastUpdate: action.lastUpdate,
				light: !!action.light
			};
		case 'INCREMENT':
			return {
				...state,
				// tslint:disable-next-line: restrict-plus-operands
				count: state.count + 1
			};
		case 'DECREMENT':
			return {
				...state,
				count: state.count - 1
			};
		case 'RESET':
			return {
				...state,
				count: initialState.count
			};
		default:
			return state;
	}
};

export const initializeStore: any = (preloadedState = initialState): any => {
	return createStore(
		reducer,
		preloadedState,
		composeWithDevTools(applyMiddleware())
	);
};
