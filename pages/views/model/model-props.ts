import { IInitialProps } from "./model-initial-props";

/**
 * 页面参数细分结构
 *
 * @interface Props
 * @extends {IInitialProps}
 */
export interface IProps extends IInitialProps {
	title: string;
	content: string;
}
