import dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';
import Consola from 'consola';
import configParser from './logics/common/config/ConfigParser';
import { AppModule } from './AppModule';
import { LogicModule } from './logics/LogicModule';
import { NextModule } from './logics/next/NextModule';
import { ConfigDefault } from './config/ConfigDefault';

dotenv.config();

/**
 * bootstrap
 *
 * @returns {Promise<any>}
 */
async function bootstrap(): Promise<any> {
	const configer: ConfigDefault = configParser.getConfig();
	const appPort: string = process.env.APP_PORT;
	const appHost: string = process.env.APP_HOST;
	const appProtocol: string = process.env.APP_PROTOCOL;
	const app: any = await NestFactory.create<NestExpressApplication>(
		AppModule
	);

	app.useStaticAssets('public');
	app.get(LogicModule).initialize(app);

	// security
	app.use(helmet());
	app.enableCors();
	app.use(cookieParser());
	app.use(rateLimit(configer.getRateConfig()));

	app.get(NextModule)
	.prepare()
	.then((): any => {
		app.listen(appPort, appHost, (): any => {
			Consola.ready({
				message: `[ Apollo ] successfully started on ${appProtocol}://${appHost}:${appPort}`,
				badge: true
			});
		});
	});
}

bootstrap();
