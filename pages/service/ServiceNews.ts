import { BaseOption, BaseService } from '@src/core/service/ServiceBase';
import configService from '@src/core/service/ServiceConfig';

/**
 * cn node服务(非中转)
 *
 * @class NewsService
 * @extends {BaseService}
 */
class NewsService extends BaseService {
	constructor() {
		const baseOption: BaseOption = new BaseOption();
		baseOption.baseUrl = configService.getConfig().cnodeUrl;
		baseOption.channel = 'news';
		super(baseOption);
	}

	/**
	 * 获取主题列表
	 *
	 * @returns {Promise<any>}
	 * @memberof CnNodeService
	 */
	public async getTopics(): Promise<any> {
		return await this.get('/api/v1/topics');
	}
}

export default new NewsService();
