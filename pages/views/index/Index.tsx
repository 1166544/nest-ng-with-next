import React from 'react';
import { IProps } from './model/ModelProps';
import { IInitialProps } from './model/ModelInitialProps';
import Head from 'next/head';
import cnNodeService from '@src/service/ServiceCNode';

import './Index.less';

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
	 * 渲染
	 *
	 * @returns
	 * @memberof Index
	 */
	public render(): any {
		// console.log('pageData...', this.props);

		return (
			<div>
				<Head>
					<title>点评记录标题</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				</Head>
				<div className="test-text">{this.props.content}</div>
				<div>{this.props.title}</div>
				<div className="mine-item">
					点评记录
				</div>
			</div>
		);
	}
}

export default Index;
