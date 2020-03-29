import { parse } from 'dotenv';
import * as fs from 'fs';
import * as Joi from 'joi';

/**
 * 环境配置
 *
 * @export
 * @interface EnvConfig
 */
export interface IEnvConfig {
	[key: string]: string;
}

/**
 * 配置服务
 *
 * @export
 * @class ConfigService
 */
export class ConfigService {
	private readonly envConfig: IEnvConfig;

	constructor(path: string = 'development') {
		this.envConfig = this.validateConfig(parse(fs.readFileSync('.env')));
	}

	/**
	 * get
	 *
	 * @param {string} key
	 * @returns {string}
	 * @memberof ConfigService
	 */
	public get(key: string): string {
		return this.envConfig[key];
	}

	/**
	 * validate config
	 *
	 * @private
	 * @param {IEnvConfig} envConfig
	 * @returns {*}
	 * @memberof ConfigService
	 */
	private validateConfig(envConfig: IEnvConfig): any {
		const joinNum: number = 50;
		const envSchema: Object = Joi.object({
			CACHE_TTL: Joi.number().default(joinNum)
		});

		const { error, value } = Joi.validate(envConfig, envSchema);

		if (error) {
			throw new Error(`Config validation error: ${error.message}`);
		}

		return value;
	}
}
