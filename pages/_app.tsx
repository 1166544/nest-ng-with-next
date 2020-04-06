import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import { theme } from '../lib/theme';

/**
 * my app
 */
class MyApp extends App {

	/**
	 * hole
	 */
	public componentDidMount(): void {
		const jssStyles: any = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentNode!.removeChild(jssStyles);
		}
	}

	/**
	 * render
	 *
	 * @returns {*}
	 * @memberof MyApp
	 */
	public render(): any {
		const { Component, pageProps } = this.props;

		return (
			<React.Fragment>
			<Head>
				<title>Apollo</title>
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
			</React.Fragment>
		);
	}
}

export default MyApp;
