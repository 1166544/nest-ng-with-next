import { IView } from '../interfaces/IView';
import React from 'react';
import { IProps } from '@src/views/detail/model/ModelProps';

/**
 * 基础视图类
 *
 * @export
 * @class BaseView
 * @extends {Vue}
 * @implements {IView}
 */
export class BaseView extends React.Component<IProps> implements IView {

	/**
	 * SEO Title
	 *
	 * @type {string}
	 * @memberof BaseView
	 */
	public title: string = '';

	/**
	 * SEO Description
	 *
	 * @type {string}
	 * @memberof BaseView
	 */
	public description: string = '';

	/**
	 * SEO Keywords
	 *
	 * @type {string}
	 * @memberof BaseView
	 */
	public keywords: string = '';

	public constructor() {
		// hole
	}
}
