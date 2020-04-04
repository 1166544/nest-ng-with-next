
import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';
import { SecurityCsrf } from '@server/common/security/SecurityCsrf';
import createError from 'http-errors';

/**
 * 安全中间件
 *
 * @export
 * @class LoggerMiddleware
 * @implements {NestMiddleware}
 */
@Injectable()
export class MiddlewareSecurity implements NestMiddleware {

	private ignoreMethods: Array<string> = ['GET', 'HEAD', 'OPTIONS'];
	private tokens: SecurityCsrf;
	private CODE_403: number = 403;
	private ONE_WEEK_TIME: number = 604800000;

	constructor() {
		this.tokens = SecurityCsrf.getInstance();
	}

	/**
	 * 过滤请求方法类型
	 *
	 * @param {array} methods
	 * @returns {object}
	 * @api private
	 */
	private getIgnoredMethods(methods: Array<string>): any {
		const obj: any = Object.create(null);

		for (let i: number = 0; i < methods.length; i++) {
			const method: string = methods[i].toUpperCase();
			obj[method] = true;
		}

		return obj;
	}

	/**
	 * 从头部取存在的X-TOKEN
	 *
	 * @param {IncomingMessage} req
	 * @return {String}
	 * @api private
	 */
	private defaultValue(req: any): string {
		return (req.body && req.body._csrf) ||
		(req.query && req.query._csrf) ||
		(req.headers['csrf-token']) ||
		(req.headers['xsrf-token']) ||
		(req.headers['x-csrf-token']) ||
		(req.headers['x-xsrf-token']);
	}

	/**
	 * 种入TOKEN
	 *
	 * @private
	 * @param {*} req
	 * @memberof MiddlewareSecurity
	 */
	private plantToken(req: any, res: any): void {
		if (req && req.headers) {
			const token: string = this.tokens.getToken();
			req.headers['x-xsrf-token'] = token;
			res.cookie('_csrf', token, { maxAge: this.ONE_WEEK_TIME, httpOnly: true });
		}
	}

	/**
	 * 拦截CSRF
	 *
	 * @param {...any[]} args
	 * @returns {MiddlewareFunction}
	 * @memberof ShareLoggerMiddleware
	 */
	public resolve(...args: any[]): MiddlewareFunction {
		return (req: any, res: any, next: any): any => {
			const ignoreMethod: any = this.getIgnoredMethods(this.ignoreMethods);
			if (ignoreMethod[req.method]) {
				// GET请求，放入TOKEN
				if (req.url.indexOf('_next') === -1) {
					this.plantToken(req, res);
				}
			} else {
				// 非GET请求校验TOKEN
				if (!this.tokens.vertify(this.defaultValue(req))) {
					return next(createError(this.CODE_403, 'invalid csrf token', {
						code: 'EBADCSRFTOKEN'
					}));
				}
			}

			next();
		};
	}
}
