import {
	CacheInterceptor,
	Controller,
	Get,
	Render,
	UseInterceptors
} from '@nestjs/common';
import { DetailService } from './DetailService';
import { Routers } from '@server/routers/RoutersServer';

/**
 * Detail控制器
 *
 * @export
 * @class AppController
 */
@Controller(Routers.DETAIL_MODULE_ROUTER)
@UseInterceptors(CacheInterceptor)
export class DetailController {
	constructor(private readonly detailService: DetailService) {}

	/**
	 * 其它页入口
	 *
	 * @returns {*}
	 * @memberof DetailController
	 */
	@Get('index')
	@Render('detail/Detail')
	public detail(): any {
		// 返回给页面数据内容
		return this.detailService.getDetailInfo();
	}
}
