import { AxiosRequestConfig } from 'axios';
import { stringify } from 'querystring';
import { BaseHttpClient } from '../engine/MiddlewareHttp';
import { ConfigDefault } from '../../../config/ConfigDefault';
import configParser from '../config/ConfigParser';

/**
 * 中转接口服务
 *
 * @export
 * @class TransportService
 */
export class TransportService extends BaseHttpClient {

	constructor() {
		super();
		// console.log(this.configService.getConfig().monitorAllLogs);
	}

	/**
	 * 依据TAG获取对应的真实URL
	 *
	 * @private
	 * @param {string} tagName
	 * @returns {string}
	 * @memberof TransportService
	 */
	private getRealChannelByTag(tagName: string): string {
		const config: ConfigDefault = configParser.getConfig();
		const url: string = config.getChannelUrlByTagName(tagName);

		return url;
	}

	/**
	 * 中转
	 */
	public async getTransportData(request: any): Promise<any> {
		// console.log('xxss', request);
		const url: string = request.headers[ConfigDefault.X_REAL_URL];
		const baseURL: string = this.getRealChannelByTag(request.headers[ConfigDefault.X_CHANNEL] || 'cnnode');
		const contentType: string = request.headers[ConfigDefault.CONTENT_TYPE];

		// 头部信息全量中转
		let headers: any = {...request.headers};
		let requestObj: AxiosRequestConfig = {
			data: request.body,
			params: request.query || request.params,
			baseURL,
			url,
			method: request.method
		};

		if (
			contentType &&
			contentType === 'application/x-www-form-urlencoded'
		) {
			headers[ConfigDefault.CONTENT_TYPE] = contentType;
			requestObj.data = stringify(requestObj.data);
		}
		requestObj.headers = headers;

		return await this.request(requestObj).toPromise();
	}
}
