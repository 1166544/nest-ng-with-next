import { Module, INestApplication } from '@nestjs/common';
import session from 'express-session';
import { EnvModule } from '../env/env.module';
import { EnvService } from '../env/env.service';

/**
 * session module
 *
 * @export
 * @class SessionModule
 */
@Module({
	imports: [EnvModule],
})
export class SessionModule {
	constructor(private readonly env: EnvService) {}

	/**
	 * 初始化
	 *
	 * @param {INestApplication} app
	 * @memberof SessionModule
	 */
	public initialize(app: INestApplication): void {
		const secret: string = this.env.get('APP_SESSION_SECRET');
		const username: string = this.env.get('DB_USERNAME');
		const password: string = this.env.get('DB_PASSWORD');
		const database: string = this.env.get('DB_DATABASE');
		const host: string = this.env.get('DB_HOST');
		const port: string = this.env.get('DB_PORT');

		// tslint:disable-next-line: no-magic-numbers
		const crearInterval: number = 7 * 24 * 60 * 60; // one week

		const pgSession: any = require('connect-pg-simple')(session);
		app.use(
			session({
				secret,
				store: new pgSession({
					conString: `postgres://${username}:${password}@${host}:${port}/${database}`,
					crear_interval: crearInterval,
				}),
				resave: false,
				saveUninitialized: false,
				rolling: true,
				cookie: {
					httpOnly: false,
					maxAge: crearInterval * 1000,
				},
			})
		);
	}
}
