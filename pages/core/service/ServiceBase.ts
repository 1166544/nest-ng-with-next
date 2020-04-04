import { IVO } from '../interfaces/IVo';
import configService from './ServiceConfig';
import { AxiosRequestConfig } from 'axios';

/**
 * 基础配置接口
 *
 * @export
 * @interface IBaseOption
 */
export interface IBaseOption {
	/** 基础URL */
	baseUrl: string;

	/** 是否本地调用 */
	isLocalHost: boolean;

	/** 调用后台频道 */
	channel: string;
}

/**
 * 基础配置类型
 *
 * @export
 * @class BaseOption
 * @implements {IBaseOption}
 */
export class BaseOption implements IBaseOption, IVO {
	constructor() {
		// hole
	}

	/**
	 * 调用URL地址
	 *
	 * @type {string}
	 * @memberof BaseOption
	 */
	public baseUrl: string = '';

	/**
	 * 是否为本地周用
	 *
	 * @type {boolean}
	 * @memberof BaseOption
	 */
	public isLocalHost: boolean = false;

	/**
	 * 调用后台频道
	 *
	 * @type {string}
	 * @memberof BaseOption
	 */
	public channel: string = '';

	/**
	 * 更新数据
	 *
	 * @param {*} val
	 * @memberof BaseOption
	 */
	public update(val: any): void {
		// hole
	}
}


/**
 * 基础接口调用类
 *
 * @export
 * @class BaseService
 */
export class BaseService {
	[x: string]: any;
	protected apiServiceInstance: any;
	protected options: IBaseOption;
	protected cookies: any;

	constructor(optios: IBaseOption) {
		this.options = optios;
	}

	/**
	 * 注册安全内容
	 *
	 * @param {*} req
	 * @memberof BaseService
	 */
	public registerSecurity(req: any, query: any): void {
		this.cookies = req.csrfToken();
	}

	/**
	 * 添加CSRF头部
	 *
	 * @private
	 * @param {AxiosRequestConfig} request
	 * @memberof BaseService
	 */
	private addCsrf(request: AxiosRequestConfig): AxiosRequestConfig {
		if (request && request.headers) {
			request.headers['x-xsrf-token'] = this.getCsrfToken();
		}

		return request;
	}

	/**
	 * 组织加工TOKEN
	 *
	 * @private
	 * @returns {string}
	 * @memberof BaseService
	 */
	private getCsrfToken(): string {
		return this.cookies || '';
	}

	/**
	 * uuid
	 *
	 * @returns
	 * @memberof QlBridge
	 */
	protected getUUID(): string {
		let s: Array<any> = [];
		const hexDigits: string = '0123456789abcdef!@#$%^&*()_+-';
		const hashLength: number = 36;
		const hashHex: number = 0x10;
		const pos14: number = 14;
		const pos19: number = 19;
		const pos8: number = 8;
		const pos13: number = 13;
		const pos18: number = 18;
		const pos23: number = 23;
		for (let i: number = 0; i < hashLength; i++) {
			s[i] = hexDigits.substr(Math.floor(Math.random() * hashHex), 1);
		}
		s[pos14] = '4';
		s[pos19] = hexDigits.substr((s[pos19] & 0x3) | 0x8, 1);
		s[pos8] = s[pos13] = s[pos18] = s[pos23] = '-';

		const uuid: string = s.join('');

		return uuid;
	}

	protected get apiService(): any {
		if (!this.apiServiceInstance) {
			this.apiServiceInstance = configService.getAxios();
		}

		this.apiServiceInstance.defaults.withCredentials = true;

		// 请求拦截,加上CSRF
		this.apiServiceInstance.interceptors.request.use(
			(request: AxiosRequestConfig) => {
				return this.addCsrf(request);
			},
			(error: any) => {
				// hole
			}
		);

		return this.apiServiceInstance;
	}

	/**
	 * 更新配置,加上目标URL前缀
	 *
	 * @protected
	 * @memberof BaseService
	 */
	protected updateConfig(url: string): string {
		// 本地调用
		if (this.options.isLocalHost) {
			return url;
		}

		// 非本地调用
		const baseUrl: string = this.options.baseUrl || '';
		const resultUrl: string = `${baseUrl}${url}`;
		// console.log(resultUrl);

		return resultUrl;
	}

	/**
	 * Request请求
	 *
	 * @protected
	 * @param {*} config
	 * @returns {void}
	 * @memberof BaseService
	 */
	protected request(config: any): void {
		return this.apiService.request(config);
	}

	/**
	 * 处理GET
	 *
	 * @param {string} url 接口地址
	 * @returns {Promise<any>}
	 * @memberof BaseService
	 */
	public async get(url: string, config: any = {}): Promise<any> {
		return await this.apiService.get(this.updateConfig(url), config);
	}

	/**
	 * 处理POST
	 *
	 * @param {string} url 接口地址
	 * @param {*} data 请求参数
	 * @param {*} [config={}] 配置信息
	 * @returns {Promise<any>}
	 * @memberof BaseService
	 */
	public async post(url: string, data: any, config: any = {}): Promise<any> {
		return this.apiService.post(this.updateConfig(url), data, config);
	}

	/**
	 * 处理DELETE
	 *
	 * @param {string} url 接口地址
	 * @param {*} [config={}] 配置信息
	 * @returns {Promise<any>}
	 * @memberof BaseService
	 */
	public async delete(url: string, config: any = {}): Promise<any> {
		return this.apiService.delete(this.updateConfig(url), config);
	}

	/**
	 * 处理HEAD
	 *
	 * @param {string} url 接口地址
	 * @param {*} [config={}] 配置信息
	 * @returns {Promise<any>}
	 * @memberof BaseService
	 */
	public async head(url: string, config: any = {}): Promise<any> {
		return this.apiService.head(this.updateConfig(url), config);
	}

	/**
	 * 处理PUT
	 *
	 * @param {string} url 接口地址
	 * @param {*} data 请求参数
	 * @param {*} [config={}] 配置信息
	 * @returns {Promise<any>}
	 * @memberof BaseService
	 */
	public async put(url: string, data: any, config: any = {}): Promise<any> {
		return this.apiService.put(this.updateConfig(url), data, config);
	}

	/**
	 * 处理PATCH
	 *
	 * @param {string} url 接口地址
	 * @param {*} data 请求参数
	 * @param {*} [config={}] 配置信息
	 * @returns {Promise<any>}
	 * @memberof BaseService
	 */
	public async patch(url: string, data: any, config: any = {}): Promise<any> {
		return this.apiService.patch(this.updateConfig(url), data, config);
	}
}
