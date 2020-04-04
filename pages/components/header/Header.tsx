import Link from 'next/link';
import React from 'react';
import { IProps } from '@src/model/ModelProps';

/**
 * 标题组件
 *
 * @class Header
 * @extends {React.Component<IProps>}
 */
class Header extends React.Component<any> {

	private linkStyle: any = {
		marginRight: 13
	};

	/**
	 * 渲染
	 *
	 * @memberof Header
	 */
	public render(): any {
		return (
			<div>
				<Link href="/">
					<a style={this.linkStyle}>Home</a>
				</Link>
				<Link href="/detail/description-query">
					<a style={this.linkStyle}>Detail</a>
				</Link>
			</div>
		);
	}
}

export default Header;
