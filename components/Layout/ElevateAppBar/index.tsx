import React from 'react';
import { AppBar, Toolbar, Typography, useScrollTrigger } from '@material-ui/core';

/** elevate app bar props */
interface IElevateAppBarProps {
	children: React.ReactElement
}

const ElevationScroll: any = (props: IElevateAppBarProps): any => {
	const { children } = props;
	const trigger: any = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0
	});
};

export const ElevateAppBar: any = (): any => {
	return (
		<ElevationScroll>
			<AppBar>
				<Toolbar>
					<Typography variant="h6">Apollo</Typography>
				</Toolbar>
			</AppBar>
		</ElevationScroll>
	);
};
