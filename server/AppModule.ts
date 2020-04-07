import {
	Module,
	NestModule,
	MiddlewareConsumer,
	RequestMethod
} from '@nestjs/common';
import { NextModule } from './logics/next/NextModule';
import { NextMiddleware } from './logics/next/NextMiddleware';
import { LogicModule } from './logics/LogicModule';
import { HomeModule } from './pages/home/HomeModule';
import {
	RedirectIfAuthenticatedMiddleware,
	RedirectIfNotAuthenticatedMiddleware
} from './logics/auth/middlewares';
import { TransportModule } from './logics/common/transport/TransportModule';
import { DetailModule } from './pages/detail/DetailModule';
import { AuthLogicalModule } from './logics/auth/AuthLogicalModule';

/**
 * App Module
 *
 * @export
 * @class AppModule
 * @implements {NestModule}
 */
@Module({
	imports: [
		NextModule,
		LogicModule,
		// 添加业务模块
		HomeModule,
		DetailModule,
		AuthLogicalModule,
		TransportModule
	],
})
export class AppModule implements NestModule {

	/**
	 * configure
	 *
	 * @param {MiddlewareConsumer} consumer
	 * @memberof AppModule
	 */
	public configure(consumer: MiddlewareConsumer): void {
		this.handleRoutes(consumer);
		this.handleAssets(consumer);
	}

	/**
	 * 路由处理
	 *
	 * @private
	 * @param {MiddlewareConsumer} consumer
	 * @memberof AppModule
	 */
	private handleRoutes(consumer: MiddlewareConsumer): void {
		consumer.apply(RedirectIfAuthenticatedMiddleware).forRoutes({
			path: 'auth/register',
			method: RequestMethod.GET
		});

		consumer.apply(RedirectIfAuthenticatedMiddleware).forRoutes({
			path: 'auth/login',
			method: RequestMethod.GET
		});

		consumer.apply(RedirectIfNotAuthenticatedMiddleware).forRoutes({
			path: '',
			method: RequestMethod.GET
		});
	}

	/**
	 * 处理资源,过滤_next关键字
	 *
	 * @private
	 * @param {MiddlewareConsumer} consumer
	 * @memberof AppModule
	 */
	private handleAssets(consumer: MiddlewareConsumer): void {
		consumer.apply(NextMiddleware).forRoutes({
			path: '_next*',
			method: RequestMethod.GET
		});
	}
}
