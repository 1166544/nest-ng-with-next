import React from 'react';
import { IProps } from './model/ModelProps';
import { IInitialProps } from './model/ModelInitialProps';
import cnNodeService from '@src/service/ServiceCNode';

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
	public static async getInitialProps({ query }: IInitialProps): Promise<any> {
		const res: any = await cnNodeService.getTopics();

		return { data: res.data, query };
	}

	/**
	 * 客户端调用获取数据
	 *
	 * @memberof Index
	 */
	public async componentDidMount(): Promise<any> {
		const res: any = await cnNodeService.getTopics();
		console.log('fetch data res.. from client', res);

		return { data: res.data };
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
