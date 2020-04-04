import {
	CacheInterceptor,
	Controller,
	Get,
	Render,
	UseInterceptors,
	Request
} from '@nestjs/common';
import { IndexService } from './IndexService';
import { Routers } from '@server/routers/RoutersServer';

/**
 * Detail控制器
 *
 * @export
 * @class IndexController
 */
@Controller(Routers.INDEX_MODULE_ROUTER)
@UseInterceptors(CacheInterceptor)
export class IndexController {
	constructor(private readonly indexService: IndexService) {}

	/**
	 * 其它页入口
	 *
	 * @returns {*}
	 * @memberof IndexController
	 */
	@Get('index')
	@Render('index/index/Index')
	public detail(@Request() req: any): any {
		// 返回给页面数据内容
		return this.indexService.getIndexInfo();
	}

	/**
	 * POST示例页面
	 *
	 * @returns {*}
	 * @memberof IndexController
	 */
	@Get('post-detail')
	@Render('index/post-page/PostPage')
	public postPage(@Request() req: any): any {
		// 返回给页面数据内容
		return this.indexService.getIndexInfo();
	}
}
