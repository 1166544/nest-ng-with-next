import { IncomingMessage, ServerResponse } from 'http';

/**
 * next render service
 *
 * @export
 * @class NextService
 */
export class NextService {
	private app!: any;

	/**
	 * set app
	 *
	 * @param {*} app
	 * @memberof NextService
	 */
	public setApp(app: any): void {
		this.app = app;
	}

	/**
	 * get app
	 *
	 * @returns {*}
	 * @memberof NextService
	 */
	public getApp(): any {
		return this.app;
	}

	/**
	 * override render
	 *
	 * @param {string} page
	 * @param {IncomingMessage} req
	 * @param {ServerResponse} res
	 * @returns {Promise<void>}
	 * @memberof NextService
	 */
	public async render(
		page: string,
		req: IncomingMessage,
		res: ServerResponse
	): Promise<void>;

	/**
	 * override render
	 *
	 * @param {string} page
	 * @param {*} data
	 * @param {IncomingMessage} req
	 * @param {ServerResponse} res
	 * @returns {Promise<void>}
	 * @memberof NextService
	 */
	public async render(
		page: string,
		data: any,
		req: IncomingMessage,
		res: ServerResponse
	): Promise<void>;

	/**
	 * override render
	 *
	 * @param {string} page
	 * @param {*} arg2
	 * @param {*} arg3
	 * @param {*} [arg4]
	 * @returns {Promise<void>}
	 * @memberof NextService
	 */
	public async render(
		page: string,
		arg2: any,
		arg3: any,
		arg4?: any
	): Promise<void> {
		if (this.isIncomingMessage(arg2)) {
			await this.app.render(arg2, arg3, page);
		} else {
			await this.app.render(arg3, arg4, page, arg2);
		}
	}

	/**
	 * is incoming message
	 *
	 * @private
	 * @param {*} arg
	 * @returns {arg is IncomingMessage}
	 * @memberof NextService
	 */
	private isIncomingMessage(arg: any): arg is IncomingMessage {
		return typeof arg.httpVersion === 'string';
	}
}
