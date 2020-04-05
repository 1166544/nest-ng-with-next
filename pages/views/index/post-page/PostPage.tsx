import React from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import useInterval from '@src/redux/ReduxUseInterval';
import Clock from '@src/components/clock/Clock';
import Counter from '@src/components/counter/Counter';
import { withRedux } from '@src/redux/Redux';

import './PostPage.less';

const PostPage: any = (): any => {
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
				<Link href="/index">
					<a>Navigate</a>
				</Link>
			</nav>
		</div>
	);
};

PostPage.getInitialProps = ({ reduxStore }: any): any => {
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

export default withRedux(PostPage);
