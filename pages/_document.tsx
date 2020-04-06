import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';

/**
 * my document
 */
class MyDocument extends Document {

	/**
	 *  render
	 */
	public render(): any {
		return (
			<html lang="en" dir="ltr">
				<Head>
					<meta charSet="utf-8" />
					<meta
						name="viewport"
						content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
					/>
					<link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
					<link rel="apple-touch-icon" href="/images/icon.png" />
					<link rel="icon" type="image/png" href="/images/icon.png" />
					<link rel="shortcut icon" href="/favicon.ico" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}

MyDocument.getInitialProps = async (ctx): Promise<any> => {
	const sheets: any = new ServerStyleSheets();
	const originalRenderPage: any = ctx.renderPage;

	ctx.renderPage = (): any =>
		originalRenderPage({
			enhanceApp: (App): any => (props): any => sheets.collect(<App {...props} />)
		});

	const initialProps: any = await Document.getInitialProps(ctx);

	return {
		...initialProps,
		styles: [
			<React.Fragment key={0}>
				{initialProps.styles}
				{sheets.getStyleElement()}
			</React.Fragment>
		]
	};
};

export default MyDocument;
