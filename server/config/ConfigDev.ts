import { ConfigDefault, IChannel } from './ConfigDefault';

/**
 * 开发服配置
 *
 * @export
 * @class ConfigDev
 * @extends {ConfigDefault}
 */
export class ConfigDev extends ConfigDefault {
	constructor() {
		super();
		// console.log('开发服配置::: 启动');
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
			url: 'http://localhost',
			type: 'internal',
			channel: 'local'
		}
	};
}

