import React from 'react';
import { IProps } from './model/ModelProps';
import { IInitialProps } from './model/ModelInitialProps';
import cnNodeService from '@src/service/ServiceCNode';
import localService from '@src/service/ServiceLocal';

/**
 * 渲染页面
 *
 * @class Index
 * @extends {React.Component<IProps>}
 */
class Index extends React.Component<IProps> {

	/**
	 * 服务端获取渲染页面数据
	 *
	 * @static
	 * @param {IInitialProps} { query }
	 * @returns
	 * @memberof Index
	 */
	public static async getInitialProps({ query, req, res }: IInitialProps): Promise<any> {
		// 注册安全选项
		cnNodeService.registerSecurity(req, query, res);

		// 调用数据
		const responseData: any = await cnNodeService.getTopics();


		// 注册安全项
		// localService.registerSecurity(req, query, res);

		// 调用数据
		// const responseData: any = await localService.getCartsListData([]);
		// const responseData: any = {};
		// console.log(responseData);

		return { data: responseData.data.data[0].title, query };
	}

	/**
	 * 客户端调用获取数据
	 *
	 * @memberof Index
	 */
	public async componentDidMount(): Promise<any> {
		// 调用外部接口示例
		// const res: any = await cnNodeService.getTopics();

		// 调用本地接口示例
		// const res: any = await localService.getCartsListData([]);

		// console.log('fetch data res.. from client', res);
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
			<div>
				<input type="hidden" name="_csrf" value={this.props.query.token}></input>
				<div>test</div>
				<div>{this.props.data}</div>
				{/* <div>{this.props.query.token}</div> */}
				{/* <div>{this.props.content}</div> */}
				{/* <div>Detail Page render content {this.props.title}</div> */}
			</div>
		);
	}
}

export default Index;
