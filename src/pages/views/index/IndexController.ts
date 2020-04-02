import {
	CacheInterceptor,
	Controller,
	Get,
	Render,
	UseInterceptors
} from '@nestjs/common';
import { IndexService } from './IndexService';
import { Routers } from '@server/routers/RoutersServer';

/**
 * Detail控制器
 *
 * @export
 * @class AppController
 */
@Controller(Routers.INDEX_MODULE_ROUTER)
@UseInterceptors(CacheInterceptor)
export class IndexController {
	constructor(private readonly indexService: IndexService) {}

	/**
	 * 其它页入口
	 *
	 * @returns {*}
	 * @memberof DetailController
	 */
	@Get('index')
	@Render('index/Index')
	public detail(): any {
		// 返回给页面数据内容
		return this.indexService.getIndexInfo();
	}
}
