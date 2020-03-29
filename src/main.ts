import { NestFactory } from '@nestjs/core';
import RenderFilter from '@server/render/render.filter';
import RenderMiddleware from '@server/render/render.middleware';
import RenderService from '@server/render/render.service';
import Next from 'next';
import { AppModule } from './app.module';

/**
 * bootstrap
 *
 */
async function bootstrap(): Promise<any> {
	const dev: boolean = process.env.NODE_ENV !== 'production';
	const app: any = Next({ dev });
	const port: number = 8088;

	await app.prepare();

	const server: any = await NestFactory.create(AppModule);
	const renderService: any = server.get(RenderService);

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

	await server.listen(port);
}

bootstrap();
