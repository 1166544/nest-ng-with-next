import { Injectable, NestMiddleware } from '@nestjs/common';
import { filterXSS } from 'xss';
import { Request, Response } from '@server/Types';

/**
 * 安全中间件XSS
 *
 * @export
 * @class LoggerMiddleware
 * @implements {NestMiddleware}
 */
@Injectable()
class MiddlewareXSS implements NestMiddleware {

	constructor() {
		// hole
	}

	/**
	 * 头部拦截
	 *
	 * @param {...any[]} args
	 * @returns {MiddlewareFunction}
	 * @memberof ShareLoggerMiddleware
	 */
	public use(req: any, res: Response, next: Function): any {
		if (req && req.query) {
			// tslint:disable-next-line:forin
			for (let key in req.query) {
				let queryValue: string = req.query[key] || '';
				if (queryValue && queryValue.indexOf(')') !== -1) {
					queryValue = queryValue.replace(/\)/gi, '');
				}
				queryValue = filterXSS(queryValue);
				queryValue = this.xssCustomerFilter(queryValue);

				req.query[key] = queryValue;
			}
		}

		if (req && req.body) {
			// tslint:disable-next-line: forin
			for (let key in req.body) {
				let bodyValue: string = req.body[key] || '';
				// tslint:disable-next-line: triple-equals
				if (bodyValue && bodyValue.indexOf(')') != -1) {
					bodyValue = bodyValue.replace(/\)/gi, '');
				}
				bodyValue = filterXSS(bodyValue);
				bodyValue = this.xssCustomerFilter(bodyValue);

				req.body[key] = bodyValue;
			}
		}

		next();
	}

	/**
	 * 过滤非XSS攻击字段
	 *
	 * @private
	 * @param {string} bodyValue
	 * @returns {string}
	 * @memberof MiddlewareXSS
	 */
	private xssCustomerFilter(bodyValue: string): string {
		let filterdFileds: string = bodyValue;
		filterdFileds = filterdFileds.replace(new RegExp('<'), 'ig');
		filterdFileds = filterdFileds.replace(new RegExp('%3C'), 'ig');
		filterdFileds = filterdFileds.replace(new RegExp('../'), 'ig');
		filterdFileds = filterdFileds.replace(new RegExp('unction'), 'ig');
		filterdFileds = filterdFileds.replace(new RegExp('cript'), 'ig');
		filterdFileds = filterdFileds.replace(new RegExp('java'), 'ig');
		filterdFileds = filterdFileds.replace(new RegExp('location'), 'ig');
		filterdFileds = filterdFileds.replace(new RegExp('document'), 'ig');
		filterdFileds = filterdFileds.replace(new RegExp('head'), 'ig');
		filterdFileds = filterdFileds.replace(new RegExp('%28'), 'ig');
		filterdFileds = filterdFileds.replace(new RegExp('%0'), 'ig');
		filterdFileds = filterdFileds.replace(new RegExp('atob'), 'ig');

		return bodyValue;
	}
}

export default MiddlewareXSS;
