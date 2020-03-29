import React from 'react';

/**
 * 服务端传给页面参数结构
 *
 * @interface InitialProps
 */
interface InitialProps {
  query: any;
}

/**
 * 页面参数细分结构
 *
 * @interface Props
 * @extends {InitialProps}
 */
interface Props extends InitialProps {
  title: string;
  content: string;
}

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
