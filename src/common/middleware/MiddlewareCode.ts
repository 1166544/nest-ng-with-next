
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from '@server/Types';

/**
 * 安全中间件
 *
 * @export
 * @class LoggerMiddleware
 * @implements {NestMiddleware}
 */
@Injectable()
class MiddlewareCode implements NestMiddleware {
	/**
	 * 头部拦截
	 *
	 * @param {...any[]} args
	 * @returns {MiddlewareFunction}
	 * @memberof ShareLoggerMiddleware
	 */
	public use(req: Request, res: Response, next: Function): any {
		res.setHeader('X-Powered-By', 'ApolloEngine');

		next();
	}
}

export default MiddlewareCode;
