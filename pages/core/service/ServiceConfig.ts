import axios from 'axios';

/**
 * 配置服务
 *
 * @class ConfigService
 */
class ConfigService {
	private static instance: ConfigService;
	private axios: any;

	/**
	 * 配置服务单例
	 *
	 * @static
	 * @returns {ConfigService}
	 * @memberof ConfigService
	 */
	public static getInstance(): ConfigService {
		if (!ConfigService.instance) {
			ConfigService.instance = new ConfigService();
		}

		return ConfigService.instance;
	}

	/**
	 * 配置数据
	 *
	 * @private
	 * @type {ConfigDefault}
	 * @memberof ConfigService
	 */
	private config: any;

	constructor() {
		this.saveAxios(axios);
	}

	/**
	 * 获取配置数据
	 *
	 * @returns {DefaultConfig}
	 * @memberof ConfigService
	 */
	public getConfig(): any {
		return {
			localUrl: 'http://127.0.0.1:8088',
			cnodeUrl: 'https://cnodejs.org'
		};
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

export default ConfigService.getInstance();
