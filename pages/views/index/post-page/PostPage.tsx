import React from 'react';
import Layout from '@src/components/layout/Layout';

import './PostPage.less';

/**
 * 渲染页面
 *
 * @class Index
 * @extends {React.Component<IProps>}
 */
class Index extends React.Component<any> {

	/**
	 * 渲染
	 *
	 * @returns
	 * @memberof Index
	 */
	public render(): any {
		// console.log('pageData...', this.props);

		return (
			<Layout>
				<p>This is the blog post content.</p>
			</Layout>
		);
	}
}

export default Index;
