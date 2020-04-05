import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

const useClock: any = (): any => {
	return useSelector(
		(state: any) => ({
			lastUpdate: state.lastUpdate,
			light: state.light
		}),
		shallowEqual
	);
};

const formatTime: any = (time: any): any => {
	// cut off except hh:mm:ss
	const num11: number = 11;
	const num19: number = 19;

	return new Date(time).toJSON().slice(num11, num19);
};

const Clock: any = (): any => {
	const { lastUpdate, light } = useClock();

	return (
		<div className={light ? 'light' : ''}>
			{formatTime(lastUpdate)}
		</div>
	);
};

export default Clock;
