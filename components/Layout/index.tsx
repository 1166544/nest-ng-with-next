import React from 'react';
import { CssBaseline, Toolbar, Container } from '@material-ui/core';
import { ElevateAppBar } from './elevate-app-bar';

/** layout props */
interface ILayoutProps {
	children?: React.ReactNode
}

export const Layout: any = ({ children }: ILayoutProps): any => {
	return (
		<React.Fragment>
			<CssBaseline />
			<ElevateAppBar />
			<Toolbar />
			<Container>{children}</Container>
		</React.Fragment>
	);
};
