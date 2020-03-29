import { CacheModule as NestCacheModule, Global, Module } from '@nestjs/common';
import { ConfigModule } from '@server/config/config.module';
import { CacheConfigService } from './cache-config.service';
import { CacheService } from './cache.service';

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
export class CacheModule {}
