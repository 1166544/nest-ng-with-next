import { Module } from '@nestjs/common';
import { AppController } from './AppController';
import { AppService } from './AppService';
import { CacheModule } from './common/cache/CacheModule';
import { ConfigModule } from './common/config/ConfigModule';
import RenderModule from './common/render/RenderModule';
import { TransportModule } from './modules/transport/TransportModule';

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
		TransportModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {
	// hole
}
