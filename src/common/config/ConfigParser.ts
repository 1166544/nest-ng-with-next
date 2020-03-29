import { ConfigDefault } from '../../config/ConfigDefault';
import { parse } from 'dotenv';
import * as fs from 'fs';
import { ConfigDev } from '../../config/ConfigDev';
import { ConfigProd } from '../../config/ConfigProd';

/**
 * 配置服务
 *
 * @class ConfigService
 */
class ConfigParser {
	private static instance: ConfigParser;
	private axios: any;

	/**
	 * 配置服务单例
	 *
	 * @static
	 * @returns {ConfigParser}
	 * @memberof ConfigService
	 */
	public static getInstance(): ConfigParser {
		if (!ConfigParser.instance) {
			ConfigParser.instance = new ConfigParser();
		}

		return ConfigParser.instance;
	}

	/**
	 * 配置数据
	 *
	 * @private
	 * @type {ConfigDefault}
	 * @memberof ConfigService
	 */
	private config: ConfigDefault;

	/**
	 * 配置数据结构
	 *
	 * @private
	 * @type {IEnvConfig}
	 * @memberof ConfigParser
	 */
	private readonly envConfig: any;

	constructor() {
		this.envConfig = parse(fs.readFileSync('.env'));
		console.log('envConfig...', this.envConfig.ENV);

		switch (this.envConfig.ENV) {
			case ConfigDefault.ENV_DEV:
				this.config = new ConfigDev();
				break;
			case ConfigDefault.ENV_PROD:
				this.config = new ConfigProd();
				break;
			default:
				this.config = new ConfigProd();
				break;
		}

		// 将环境标识写入配置中
		this.config.updateEnv(this.envConfig.ENV);
	}

	/**
	 * 获取配置数据
	 *
	 * @returns {DefaultConfig}
	 * @memberof ConfigService
	 */
	public getConfig(): ConfigDefault {
		return this.config;
	}

	/**
	 * 获取AXIOS实例
	 *
	 * @returns {*}
	 * @memberof ConfigService
	 */
	public getAxios(): any {
		return this.axios;
	}

	/**
	 * 保存axios实例
	 *
	 * @param {*} axios
	 * @memberof ConfigService
	 */
	public saveAxios(axios: any): void {
		this.axios = axios;
	}
}

export default ConfigParser.getInstance();
