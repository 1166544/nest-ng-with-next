import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography, Button, Card, CardContent } from '@material-ui/core';
import { Http } from '../../lib/http';
import { Layout } from '../../components/layout';
import cnNodeService from '../../lib/service/ServiceCNode';
import localService from '../../lib/service/ServiceLocal';

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
	 * 获取渲染页面数据
	 *
	 * @static
	 * @param {*} { req }
	 * @returns {Promise<any>}
	 * @memberof Index
	 */
	public static async getInitialProps(params: any): Promise<any> {
		const { user } = params.req;

		// 注册安全选项
		cnNodeService.registerSecurity(params);

		// 调用数据
		const responseData: any = await cnNodeService.getTopics();


		// 注册安全项
		// localService.registerSecurity(req, query, res);

		// 调用数据
		// const responseData: any = await localService.getCartsListData([]);
		// const responseData: any = {};
		// console.log(responseData);

		return { data: responseData.data, query: params.query, user };
	}

	/**
	 * 客户端调用获取数据
	 *
	 * @memberof Index
	 */
	public async componentDidMount(): Promise<any> {
		// 注册安全选项
		// 调用外部接口示例
		// cnNodeService.registerSecurity(this.props || {});
		// const res: any = await cnNodeService.getTopics();

		// console.log('start fetch data res.. from client');

		// 注册安全选项
		localService.registerSecurity(this.props || {});

		// 调用本地接口示例
		const resLocal: any = await localService.getCartsListData([]);

		console.log('fetch data res.. from client', resLocal);
		// console.log(this.props);

		return { data: {res: 'res.data'} };
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
								{/* <Typography variant="body1">Detail page You are now logged in as {this.props.user.name} :)</Typography> */}
								<br />
								<Button type="submit" variant="outlined" color="primary" size="large" onClick={this.onClick.bind(this)}>
									LOGOUT
								</Button>
							</CardContent>
						</Card>
					</div>
					{
						this.props.data.data.map((item: any): any => {
							return <Card className={this.classes.card}>
								<CardContent>
									{item.title}
								</CardContent>
							</Card>;
						})
					}
				</div>
			</Layout>
		);
	}

}

export default Index;
