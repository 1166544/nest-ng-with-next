import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';

/**
 * ICacheManager
 *
 * @export
 * @interface ICacheManager
 */
export interface ICacheManager {
	store: any;

	/**
	 * get
	 *
	 * @param {string} key
	 * @returns {*}
	 * @memberof ICacheManager
	 */
	get(key: string): any;

	/**
	 * set
	 *
	 * @param {string} key
	 * @param {string} value
	 * @param {{ ttl: number }} [options]
	 * @returns {*}
	 * @memberof ICacheManager
	 */
	set(key: string, value: string, options?: { ttl: number }): any;
}

/**
 * 可注入cache服务
 *
 * @export
 * @class CacheService
 */
@Injectable()
export class CacheService {
	private cache!: ICacheManager;

	constructor(@Inject(CACHE_MANAGER) cache: ICacheManager) {
		this.cache = cache;
	}

	/**
	 * get
	 *
	 * @param {string} key
	 * @returns {Promise<any>}
	 * @memberof CacheService
	 */
	public get(key: string): Promise<any> {
		return this.cache.get(key);
	}

	/**
	 * set
	 *
	 * @param {string} key
	 * @param {*} value
	 * @param {{ ttl: number }} [options]
	 * @returns {Promise<any>}
	 * @memberof CacheService
	 */
	public set(
		key: string,
		value: any,
		options?: { ttl: number }
	): Promise<any> {
		return this.cache.set(key, value, options);
	}
}
