import passport from 'passport';
import { Module, INestApplication } from '@nestjs/common';
import { UserModule } from '../user/UserModule';
import { AuthLogicalService } from './AuthLogicalService';
import { LocalRegisterStrategy, LocalLoginStrategy } from './strategies';

/**
 * auth module
 *
 * @export
 * @class AuthModule
 */
@Module({
	imports: [UserModule],
	providers: [AuthLogicalService, LocalRegisterStrategy, LocalLoginStrategy],
	exports: [AuthLogicalService],
})
export class AuthLogicalModule {
	constructor(private readonly authService: AuthLogicalService) {}

	/**
	 * 初始化
	 *
	 * @param {INestApplication} app
	 * @memberof AuthModule
	 */
	public initialize(app: INestApplication): void {
		app.use(passport.initialize());
		app.use(passport.session());

		passport.serializeUser(
			(user: any, done: (err: any, id?: any) => void): any => done(null, user)
		);
		passport.deserializeUser(
			(id: any, done: (err: any, user?: any) => void): any => done(null, id)
		);

		passport.use(new LocalRegisterStrategy(this.authService));
		passport.use(new LocalLoginStrategy(this.authService));
	}
}
