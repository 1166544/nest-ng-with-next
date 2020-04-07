import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography, Button, Card, CardContent } from '@material-ui/core';
import { Http } from '../lib/http';
import { Layout } from '../components/Layout';

/**
 * index page
 *
 * @class Index
 * @extends {React.Component<any>}
 */
class Index extends React.Component<any> {
	public classes: any;

	constructor(props: any, context?: any) {
		super(props, context);
		this.classes = this.useStyles({});
	}

	/**
	 * use styles
	 *
	 * @private
	 * @param {*} themeData
	 * @returns {*}
	 * @memberof Index
	 */
	private useStyles(themeData: any): any {
		return makeStyles((theme: Theme): any =>
			createStyles({
				root: {
					textAlign: 'center',
					paddingTop: theme.spacing(8)
				},
				container: {
					width: 480,
					margin: `${theme.spacing(2)}px auto`
				},
				card: {
					padding: theme.spacing(4)
				}
			})
		);
	}

	/**
	 * 获取渲染页面数据
	 *
	 * @static
	 * @param {*} { req }
	 * @returns {Promise<any>}
	 * @memberof Index
	 */
	public static async getInitialProps({ req }: any): Promise<any> {
		const { user } = req;

		return {
			user
		};
	}

	/**
	 * on click
	 *
	 * @private
	 * @param {React.MouseEvent} e
	 * @returns {Promise<any>}
	 * @memberof Index
	 */
	private async onClick(e: React.MouseEvent): Promise<any> {
		e.preventDefault();
		const http: Http = new Http();
		const response: any = await http.post('api/auth/logout');
		if (response.ok) {
			location.href = '/auth/login';
		}
	}

	/**
	 * render
	 *
	 * @returns {*}
	 * @memberof Index
	 */
	public render(): any {
		return (
			<Layout>
				<div className={this.classes.root}>
					<div className={this.classes.container}>
						<Card className={this.classes.card}>
							<CardContent>
								<Typography variant="body1">You are now logged in as {this.props.user.name} :)</Typography>
								<br />
								<Button type="submit" variant="outlined" color="primary" size="large" onClick={this.onClick.bind(this)}>
									LOGOUT
								</Button>
							</CardContent>
						</Card>
					</div>
				</div>
			</Layout>
		);
	}

}

export default Index;
