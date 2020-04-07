/**
 * 基础配置
 *
 * @export
 * @class ConfigDefault
 */
export class ConfigDefault {

	/**
	 * X real url of config default
	 */
	public static X_REAL_URL: string = 'x-real-url';

	/**
	 * X channel of config default
	 */
	public static X_CHANNEL: string = 'x-channel';

	/**
	 * X real base url of config default
	 */
	public static X_REAL_BASE_URL: string = 'x-real-base-url';

	/**
	 * content-type
	 */
	public static CONTENT_TYPE: string = 'content-type';

	/**
	 * Env dev of config default
	 */
	public static ENV_DEV: string = 'development';

	/**
	 * Env prod of config default
	 */
	public static ENV_PROD: string = 'production';

	/**
	 * 默认环境标识
	 * @description Env  of config default
	 */
	private _env: string = ConfigDefault.ENV_PROD;

	/**
	 * cnnode频道
	 *
	 * @type {string}
	 * @memberof ConfigDefault
	 */
	public channelCnNode: string = 'cnnode';

	/**
	 * 本地频道
	 *
	 * @type {string}
	 * @memberof ConfigDefault
	 */
	public channelLocal: string = 'local';

	constructor() {
		// hole
	}

	/**
	 * 频道URL配置数据
	 *
	 * @type {IChannel}
	 * @memberof ConfigDefault
	 */
	public channelConfigData: IChannel = {
		cnnode: {
			url: 'https://cnodejs.org',
			type: 'extrenal',
			channel: this.channelCnNode
		},
		local: {
			url: 'http://localhost',
			type: 'internal',
			channel: this.channelLocal
		}
	};

	/**
	 * 服务器访问路径
	 *
	 * @type {string}
	 * @memberof ConfigDefault
	 */
	public serverAdderess: string = 'localhost';

	/**
	 * 启动端口
	 *
	 * @type {number}
	 * @memberof ConfigDefault
	 */
	public port: number = 8088;

	/**
	 * 是否输出所有日志记录
	 */
	public monitorAllLogs: boolean = false;

	/**
	 * charles抓包地址
	 */
	public httpProxyUrl: string = 'http://localhost';

	/**
	 * charles抓包端口
	 */
	public httpProxyPort: number = 8888;

	/**
	 * 依据TAG名字获取对应频道URL
	 *
	 * @param {string} tagName
	 * @returns {string}
	 * @memberof ConfigDefault
	 */
	public getChannelUrlByTagName(tagName: string): string {
		let url: string = '';
		switch (tagName) {
			case 'cnnode':
				url = this.channelConfigData.cnnode.url;
				break;
			case 'local':
				url = this.channelConfigData.local.url;
				break;
			default:
				url = this.channelConfigData.local.url;
				break;
		}

		return url;
	}

	/**
	 * proxy-agent地址
	 */
	public getProxyAddress(): string {
		return `${this.httpProxyUrl}:${this.httpProxyPort}`;
	}

	/**
	 * API统一前缀
	 */
	public getGlobalPrefix(): string {
		return 'api';
	}

	/**
	 * 获取当前环境标识
	 * @description Gets env
	 * @returns env
	 */
	public getEnv(): string {
		return this._env;
	}

	/**
	 * 更新环境标识
	 * @description Updates env
	 * @param env
	 */
	public updateEnv(env: string): void {
		this._env = env;
	}

	/**
	 * 鉴权白名单页面，在此列表内页面将进行登录判断
	 */
	public authWhiteList(): Array<string> {
		return [
			'/cart',
			'/goods',
			'/'
		];
	}

	/**
	 * rateLimit配置
	 *
	 * @returns
	 * @memberof ConfigDefault
	 */
	public getRateConfig(): any {
		return {
			windowMs: 900000, // 15 * 60 * 1000 15 minutes
			max: 100 // limit each IP to 100 requests per windowMs
		};
	}
}

/**
 * 频道配置
 *
 * @export
 * @interface IChannel
 */
export interface IChannel {
	/**
	 * cnnode频道
	 *
	 * @type {IChannelData}
	 * @memberof IChannel
	 */
	cnnode: IChannelData;

	/**
	 * 本地频道
	 *
	 * @type {IChannelData}
	 * @memberof IChannel
	 */
	local: IChannelData;
}

/**
 * 频道数据
 *
 * @export
 * @interface IChannelData
 */
export interface IChannelData {
	/**
	 * 频道URL
	 *
	 * @type {string}
	 * @memberof IChannelData
	 */
	url: string;

	/**
	 * 频道类型
	 *
	 * @type {string}
	 * @memberof IChannelData
	 */
	type: string

	/**
	 * 频道名
	 *
	 * @type {string}
	 * @memberof IChannel
	 */
	channel: string;
}
