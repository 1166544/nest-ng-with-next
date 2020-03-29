import { NestFactory } from '@nestjs/core';
import RenderFilter from '@server/common/render/RenderFilter';
import RenderMiddleware from '@server/common/render/RenderMiddleware';
import RenderService from '@server/common/render/RenderService';
import Next from 'next';
import { AppModule } from '@server/AppModule';
import { ConfigDefault } from '@server/config/ConfigDefault';
import configParser from '@server/common/config/ConfigParser';
import Consola from 'consola';

/**
 * bootstrap
 *
 */
async function bootstrap(): Promise<any> {
	const dev: boolean = process.env.NODE_ENV !== 'production';
	const app: any = Next({ dev });

	await app.prepare();

	const server: any = await NestFactory.create(AppModule);
	const renderService: any = server.get(RenderService);
	const configer: ConfigDefault = configParser.getConfig();
	const serverPort: number = Number(process.env.PORT) || configer.port;
	const host: string = configer.serverAdderess;

	renderService.setRequestHandler(app.getRequestHandler());
	renderService.setRenderer(app.render.bind(app));
	renderService.setErrorRenderer(app.renderError.bind(app));
	renderService.bindHttpServer(server.getHttpAdapter());

	server.use(new RenderMiddleware(renderService).resolve());
	server.useGlobalFilters(
		new RenderFilter(
			renderService.getRequestHandler(),
			renderService.getErrorRenderer()
		)
	);

	await server.listen(serverPort, host, () => {
		Consola.ready({
			message: `Server listening on http://${host}:${serverPort}`,
			badge: true
		});
	});
}

bootstrap();
