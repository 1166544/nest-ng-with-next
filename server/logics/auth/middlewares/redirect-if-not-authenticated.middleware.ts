import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

/**
 * 未登录重定向处理
 *
 * @export
 * @class RedirectIfNotAuthenticatedMiddleware
 * @implements {NestMiddleware}
 */
@Injectable()
export class RedirectIfNotAuthenticatedMiddleware implements NestMiddleware {

	/**
	 * use
	 *
	 * @param {Request} req
	 * @param {Response} res
	 * @param {NextFunction} next
	 * @returns {*}
	 * @memberof RedirectIfNotAuthenticatedMiddleware
	 */
	public use(req: Request, res: Response, next: NextFunction): any {
		if (!req.user) {
			return res.redirect('/auth/login');
		}
		next();
	}
}
