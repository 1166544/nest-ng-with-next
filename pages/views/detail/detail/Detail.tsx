import React from 'react';
import { IProps } from '../../../model/ModelProps';
import { IInitialProps } from '../../../model/ModelInitialProps';
import cnNodeService from '@src/service/ServiceCNode';
import localService from '@src/service/ServiceLocal';
import Layout from '@src/components/layout/Layout';
import PostLink from '../components/post-link/PostLink';

import './Detail.less';

/**
 * 渲染页面
 *
 * @class Index
 * @extends {React.Component<IProps>}
 */
class Detail extends React.Component<IProps> {

	/**
	 * 服务端获取渲染页面数据
	 *
	 * @static
	 * @param {IInitialProps} { query }
	 * @returns
	 * @memberof Index
	 */
	public static async getInitialProps(params: IInitialProps): Promise<any> {
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

		return { data: responseData.data, query: params.query };
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

		console.log('start fetch data res.. from client');

		// 注册安全选项
		localService.registerSecurity(this.props || {});

		// 调用本地接口示例
		const res: any = await localService.getCartsListData([]);

		console.log('fetch data res.. from client', res);
		// console.log(this.props);

		return { data: {res: 'res.data'} };
	}

	/**
	 * 渲染
	 *
	 * @returns
	 * @memberof Index
	 */
	public render(): any {
		// console.log('pageData...', JSON.stringify(this.props));

		return (
			<Layout content={this.props.query.token}>
				<div>test</div>
				{/* <div>{this.props.data}</div> */}
				<ul>
					<PostLink title="Next.js test"></PostLink>
					<PostLink title="Next.js awesome"></PostLink>
					<PostLink title="Next.js cool"></PostLink>
				</ul>
				<ul>
					{
						this.props.data.data.map((item: any) => {
							return <li>{item.title}</li>;
						})
					}
				</ul>
				{/* <div>{this.props.query.token}</div> */}
				{/* <div>{this.props.content}</div> */}
				{/* <div>Detail Page render content {this.props.title}</div> */}
			</Layout>
		);
	}
}

export default Detail;
