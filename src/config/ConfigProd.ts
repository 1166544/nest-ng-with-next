import { ConfigDefault, IChannel } from './ConfigDefault';

/**
 * 生产服配置
 *
 * @export
 * @class ConfigProd
 * @extends {ConfigDefault}
 */
export class ConfigProd extends ConfigDefault {
	constructor() {
		super();
		// console.log('生产服配置::: 启动');
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
			channel: 'cnnode'
		},
		local: {
			url: 'http://127.0.0.1',
			type: 'internal',
			channel: 'local'
		}
	};
}

