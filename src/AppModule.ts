import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './AppController';
import { AppService } from './AppService';
import { CacheModule } from './common/cache/CacheModule';
import { ConfigModule } from './common/config/ConfigModule';
import RenderModule from './common/render/RenderModule';
import { TransportModule } from './common/transport/TransportModule';
import { DetailModule } from './pages/views/detail/DetailModule';
import { IndexModule } from './pages/views/index/IndexModule';
import { LocalModule } from './pages/views/local/LocalModule';
import { MiddlewareCode } from './common/middleware/MiddlewareCode';
import { MiddlewareSecurity } from './common/middleware/MiddlewareSecurity';

/**
 * app module
 *
 * @export
 * @class AppModule
 */
@Module({
	imports: [
		RenderModule,
		CacheModule,
		ConfigModule,
		TransportModule,
		DetailModule,
		IndexModule,
		LocalModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule  implements NestModule{
	/**
	 * 配置
	 * @param consumer
	 */
	public configure(consumer: MiddlewareConsumer): any {
		consumer.apply(
			MiddlewareCode,
			MiddlewareSecurity
		).forRoutes({ path: '*', method: RequestMethod.ALL });
	}
}
