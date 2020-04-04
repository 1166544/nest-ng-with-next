import React from 'react';
import Link from 'next/link';

/**
 * 子组件路由标题
 *
 * @class PostLink
 * @extends {React.Component<any>}
 */
class PostTitle extends React.Component<any> {

	/**
	 * render
	 *
	 * @returns {*}
	 * @memberof PostLink
	 */
	public render(): any {
		return (
			<li>
				<Link href={`/index/post-detail?title=${this.props.title}`}>
					<a>{this.props.title}</a>
				</Link>
			</li>
		);
	}
}

export default PostTitle;
