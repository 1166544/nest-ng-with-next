import { CacheModule as NestCacheModule, Global, Module } from '@nestjs/common';
import { ConfigModule } from '@server/common/config/ConfigModule';
import { CacheConfigService } from './CacheConfigService';
import { CacheService } from './CacheService';

/**
 * cache 模块
 *
 * @export
 * @class CacheModule
 */
@Global()
@Module({
	imports: [
		NestCacheModule.registerAsync({
			imports: [ConfigModule],
			useClass: CacheConfigService,
			inject: [CacheConfigService]
		})
	],
	providers: [CacheConfigService, CacheService],
	exports: [CacheService]
})
export class CacheModule {
	// hole
}
