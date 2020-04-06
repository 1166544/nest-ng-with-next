import passport from 'passport';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

/**
 * 登录守户
 *
 * @export
 * @class LoginGuard
 * @implements {CanActivate}
 */
@Injectable()
export class LoginGuard implements CanActivate {

	/**
	 * 是否激活
	 *
	 * @param {ExecutionContext} context
	 * @returns {Promise<boolean>}
	 * @memberof LoginGuard
	 */
	public async canActivate(context: ExecutionContext): Promise<boolean> {
		const [req, res, next]: Array<any> = [
			context.switchToHttp().getRequest(),
			context.switchToHttp().getResponse(),
			context.switchToHttp().getNext(),
		];

		return new Promise((resolve: any): any => {
			passport.authenticate('local-login', (err: any, user?: any): any => {
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
