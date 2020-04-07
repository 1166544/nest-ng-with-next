import { IInitialProps } from './ModelInitialProps';

/**
 * 页面参数细分结构
 *
 * @interface Props
 * @extends {IInitialProps}
 */
export interface IProps extends IInitialProps {
	title: string;
	content: string;
	id?: string;
	data?: any
}
