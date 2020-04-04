import React from 'react';
import Layout from '@src/components/layout/Layout';

import './Local.less';
import { IProps } from '@src/model/ModelProps';

/**
 * 渲染页面
 *
 * @class Local
 * @extends {React.Component<IProps>}
 */
class Local extends React.Component<IProps> {

	/**
	 * 渲染
	 *
	 * @returns
	 * @memberof Index
	 */
	public render(): any {

		return (
			<Layout>
				<h1>This is the blog post content.</h1>
			</Layout>
		);
	}
}

export default Local;
