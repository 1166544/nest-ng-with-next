import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

/**
 * 已登录重定向处理
 *
 * @export
 * @class RedirectIfAuthenticatedMiddleware
 * @implements {NestMiddleware}
 */
@Injectable()
export class RedirectIfAuthenticatedMiddleware implements NestMiddleware {
	/**
	 * use
	 *
	 * @param {Request} req
	 * @param {Response} res
	 * @param {NextFunction} next
	 * @returns {void}
	 * @memberof RedirectIfAuthenticatedMiddleware
	 */
	public use(req: Request, res: Response, next: NextFunction): void {
		if (req.user) {
			return res.redirect('/');
		}
		next();
	}
}
