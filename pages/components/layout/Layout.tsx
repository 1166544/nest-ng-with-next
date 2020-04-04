import React from 'react';
import Header from '@src/components/header/Header';

/**
 * 框架布局
 *
 * @class Layout
 * @extends {React.Component<any>}
 */
class Layout extends React.Component<any> {
	private layoutStyle: any = {
		margin: 20,
		padding: 20,
		border: '1px solid #000'
	};

	/**
	 * render
	 *
	 * @returns {*}
	 * @memberof Layout
	 */
	public render(): any {
		return (
			<div style={this.layoutStyle}>
				<input type="hidden" name="_csrf" value={this.props.content}></input>
				<Header />
				{this.props.children}
			</div>
		);
	}
}

export default Layout;
