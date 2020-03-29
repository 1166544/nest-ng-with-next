import {
	CacheModuleOptions,
	CacheOptionsFactory,
	Injectable
} from '@nestjs/common';
import { ConfigService } from '@server/config/config.service';

/**
 * 缓存服务
 *
 * @export
 * @class CacheConfigService
 * @implements {CacheOptionsFactory}
 */
@Injectable()
export class CacheConfigService implements CacheOptionsFactory {

	/**
	 * 等待时间
	 *
	 * @private
	 * @type {number}
	 * @memberof CacheConfigService
	 */
	private waitTime: number = 3000;

	/**
	 * 1分钟等待时间
	 *
	 * @private
	 * @type {number}
	 * @memberof CacheConfigService
	 */
	private waitMinuteTime: number = 60;

	constructor(private configService: ConfigService) {
		// hole
	}

	/**
	 * Example retry strategy for when redis is used for the cache
	 * This example is only compatible with cache-manager-redis-store because it used node_redis
	 *
	 * @returns
	 * @memberof CacheConfigService
	 */
	public retryStrategy(): any {
		return {
			retry_strategy: (options: any): any => {
				if (options.error && options.error.code === 'ECONNREFUSED') {
					return new Error('The server refused the connection');
				}
				if (options.total_retry_time > 1000 * this.waitMinuteTime) {
					return new Error('Retry time exhausted');
				}
				if (options.attempt > 2) {
					return new Error('Max attempts exhausted');
				}

				return Math.min(options.attempt * 100, this.waitTime);
			}
		};
	}

	/**
	 * 创建缓存选项
	 *
	 * @returns {CacheModuleOptions}
	 * @memberof CacheConfigService
	 */
	public createCacheOptions(): CacheModuleOptions {
		return {};
	}
}
