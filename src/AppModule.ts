import { Module } from '@nestjs/common';
import { AppController } from './AppController';
import { AppService } from './AppService';
import { CacheModule } from './common/cache/CacheModule';
import { ConfigModule } from './common/config/ConfigModule';
import RenderModule from './common/render/RenderModule';

/**
 * app module
 *
 * @export
 * @class AppModule
 */
@Module({
	imports: [RenderModule, CacheModule, ConfigModule],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
