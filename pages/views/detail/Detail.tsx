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
	 * 获取渲染页面数据
	 *
	 * @static
	 * @param {IInitialProps} { query }
	 * @returns
	 * @memberof Index
	 */
	public static async getInitialProps({ query, req }: IInitialProps): Promise<any> {
		// 注册安全选项
		localService.registerSecurity(req);

		// const res: any = await cnNodeService.getTopics();
		const res: any = await localService.getCartsListData([]);

		return { data: res.data, query };
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

		// return { data: res.data };
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
				<div>{this.props.query.id}</div>
				<div>{this.props.content}</div>
				<div>Detail Page render content {this.props.title}</div>
			</div>
		);
	}
}

export default Index;
