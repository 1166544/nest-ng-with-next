import { Module } from '@nestjs/common';
import { AppController } from './AppController';
import { AppService } from './AppService';
import { CacheModule } from './common/cache/CacheModule';
import { ConfigModule } from './common/config/ConfigModule';
import RenderModule from './common/render/RenderModule';
import { TransportModule } from './common/transport/TransportModule';
import { DetailModule } from './pages/views/detail/DetailModule';
import { IndexModule } from './pages/views/index/IndexModule';

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
		IndexModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {
	// hole
}
