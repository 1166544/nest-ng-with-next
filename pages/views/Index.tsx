import React from 'react';
import { Props } from './model/ModelProps';
import { InitialProps } from './model/ModelInitialProps';

/**
 * 渲染页面
 *
 * @class Index
 * @extends {React.Component<Props>}
 */
class Index extends React.Component<Props> {

	/**
	 * 获取渲染页面数据
	 *
	 * @static
	 * @param {InitialProps} { query }
	 * @returns
	 * @memberof Index
	 */
	public static getInitialProps({ query }: InitialProps) {
		return query;
	}

	/**
	 * 渲染
	 *
	 * @returns
	 * @memberof Index
	 */
	public render() {
		console.log('pageData...', this.props);

		return (<div><a>{this.props.title}</a></div>);
	}
}

export default Index;
