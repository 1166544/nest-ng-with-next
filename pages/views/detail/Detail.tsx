import React from 'react';
import { IProps } from './model/ModelProps';
import { IInitialProps } from './model/ModelInitialProps';

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
	public static getInitialProps({ query }: IInitialProps): IInitialProps {
		return query;
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
				<div>{this.props.content}</div>
				<div>Detail Page render content {this.props.title}</div>
			</div>
		);
	}
}

export default Index;
