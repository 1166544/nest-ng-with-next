
import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';

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
	public resolve(...args: any[]): MiddlewareFunction {
		return (req: any, res: any, next: any): any => {
			res.setHeader('X-Powered-By', 'ApolloEngine');

			next();
		};
	}
}

export default MiddlewareCode;
