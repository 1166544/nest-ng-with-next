import { InitialProps } from "./ModelInitialProps";

/**
 * 页面参数细分结构
 *
 * @interface Props
 * @extends {InitialProps}
 */
export interface Props extends InitialProps {
	title: string;
	content: string;
}
