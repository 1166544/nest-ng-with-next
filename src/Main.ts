import { NestFactory } from '@nestjs/core';
import RenderFilter from '@server/common/render/RenderFilter';
import RenderMiddleware from '@server/common/render/RenderMiddleware';
import RenderService from '@server/common/render/RenderService';
import Next from 'next';
import { AppModule } from '@server/AppModule';
import { ConfigDefault } from '@server/config/ConfigDefault';
import configParser from '@server/common/config/ConfigParser';
import Consola from 'consola';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';
import MiddlewareCode from '@server/common/middleware/MiddlewareCode';
import MiddlewareSecurity from '@server/common/middleware/MiddlewareSecurity';
import MiddlewareXSS from '@server/common/middleware/MiddlewareXSS';

/**
 * bootstrap
 *
 */
async function bootstrap(): Promise<any> {
	const envFlag: boolean = process.env.NODE_ENV !== 'production';
	const app: any = Next({ dev: envFlag });

	// ready
	await app.prepare();

	const server: any = await NestFactory.create(AppModule);
	const renderService: any = server.get(RenderService);
	const configer: ConfigDefault = configParser.getConfig();
	const serverPort: number = Number(process.env.PORT) || configer.port;
	const host: string = configer.serverAdderess;

	// render
	renderService.setRequestHandler(app.getRequestHandler());
	renderService.setRenderer(app.render.bind(app));
	renderService.setErrorRenderer(app.renderError.bind(app));
	renderService.bindHttpServer(server.getHttpAdapter());

	server.use(new MiddlewareCode());
	server.use(new MiddlewareSecurity());
	server.use(new MiddlewareXSS());
	server.use(new RenderMiddleware(renderService));
	server.useGlobalFilters(
		new RenderFilter(
			renderService.getRequestHandler(),
			renderService.getErrorRenderer()
		)
	);

	// security
	server.use(helmet());
	server.enableCors();
	server.use(cookieParser());
	server.use(rateLimit(configer.getRateConfig()));

	// port listen
	await server.listen(serverPort, host, (): any => {
		Consola.ready({
			message: `Server listening on http://${host}:${serverPort}`,
			badge: true
		});
	});
}

bootstrap();
