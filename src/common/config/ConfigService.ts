import { parse } from 'dotenv';
import * as fs from 'fs';
import * as Joi from 'joi';
import { IEnvConfig } from './interfaces/IEnvConfig';
import configParser from '@server/common/config/ConfigParser';
import { ConfigDefault } from '@server/config/ConfigDefault';

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
	 * 获取当前环境配置
	 *
	 * @returns {ConfigDefault}
	 * @memberof ConfigService
	 */
	public getConfig(): ConfigDefault {
		return configParser.getConfig();
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
			CACHE_TTL: Joi.number().default(joinNum),
			ENV: Joi.string().default('dev')
		});

		const { error, value } = Joi.validate(envConfig, envSchema);

		if (error) {
			throw new Error(`Config validation error: ${error.message}`);
		}

		return value;
	}
}
