import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import useInterval from '@src/redux/ReduxUseInterval';
import Clock from '@src/components/clock/Clock';
import Counter from '@src/components/counter/Counter';
import { withRedux } from '@src/redux/Redux';

const IndexPage: any = (): any => {
	// Tick the time every second
	const dispatch: any = useDispatch();
	useInterval(() => {
		dispatch({
			type: 'TICK',
			light: true,
			lastUpdate: Date.now()
		});
	}, 1000);

	return (
		<div>
			<Clock />
			<Counter />
			<nav>
				<Link href="/index/post-detail">
					<a>Navigate</a>
				</Link>
			</nav>
		</div>
	);
};

IndexPage.getInitialProps = ({ reduxStore }: any): any => {
	// Tick the time once, so we'll have a
	// valid time before first render
	const { dispatch } = reduxStore;
	dispatch({
		type: 'TICK',
		light: typeof window === 'object',
		lastUpdate: Date.now()
	});

	return {};
};

export default withRedux(IndexPage);
