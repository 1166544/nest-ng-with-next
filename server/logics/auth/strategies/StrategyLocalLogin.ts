import { Strategy } from 'passport-local';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../AuthService';

/**
 * 本地登录策略
 *
 * @export
 * @class LocalLoginStrategy
 * @extends {Strategy}
 */
@Injectable()
export class LocalLoginStrategy extends Strategy {
	public name: string = 'local-login';

	constructor(private readonly authService: AuthService) {
		super(
			{
				usernameField: 'email',
				passwordField: 'password',
			},
			async (
				email: string,
				password: string,
				done: (err: any, user?: any) => void
			): Promise<any> => {
				const user: any = await this.authService.validateUser(
					email,
					password
				);
				if (!user) {
					return done(new UnauthorizedException(), null);
				}

				return done(null, user);
			}
		);
	}
}
