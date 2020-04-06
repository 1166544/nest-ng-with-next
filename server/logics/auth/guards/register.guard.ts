import passport from 'passport';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

/**
 * 注册逻辑守护
 *
 * @export
 * @class RegisterGuard
 * @implements {CanActivate}
 */
@Injectable()
export class RegisterGuard implements CanActivate {

	/**
	 * 是否激活
	 *
	 * @param {ExecutionContext} context
	 * @returns {Promise<boolean>}
	 * @memberof RegisterGuard
	 */
	public async canActivate(context: ExecutionContext): Promise<boolean> {
		const [req, res, next]: Array<any> = [
			context.switchToHttp().getRequest(),
			context.switchToHttp().getResponse(),
			context.switchToHttp().getNext(),
		];

		return new Promise((resolve: any): any => {
			passport.authenticate('local-register', (err: any, user: any): any => {
				if (err || !user) {
					return resolve(false);
				}

				req.logIn(user, (err: any): any => {
					if (err) {
						return resolve(false);
					}

					req.session.save((err: any): any => {
						if (err) {
							return resolve(false);
						}

						return resolve(true);
					});
				});
			})(req, res, next);
		});
	}
}
