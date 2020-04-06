import { Module, INestApplication } from '@nestjs/common';
import { EnvModule } from './env/env.module';
import { SessionModule } from './session/session.module';
import { NextModule } from './next/next.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

/**
 * Logic module
 *
 * @export
 * @class LogicModule
 */
@Module({
	imports: [EnvModule, SessionModule, NextModule, AuthModule, UserModule],
})
export class LogicModule {

	/**
	 * 初始化
	 *
	 * @param {INestApplication} app
	 * @memberof LogicModule
	 */
	public initialize(app: INestApplication): any {
		// enable session store in PostgreSQL
		app.get(SessionModule).initialize(app);

		// enable passport session
		// NOTE: we must use this at the end of `app.use()` list
		app.get(AuthModule).initialize(app);
	}
}
