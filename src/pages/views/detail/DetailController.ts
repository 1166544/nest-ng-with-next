import {
	CacheInterceptor,
	Controller,
	Get,
	Render,
	UseInterceptors,
	Res,
	Param,
	Query,
	Req
} from '@nestjs/common';
import { DetailService } from './DetailService';
import { Routers } from '@server/routers/RoutersServer';
import { EngineController } from '@server/common/engine/EngineController';


/**
 * Detail控制器
 *
 * @export
 * @class DetailController
 */
@Controller(Routers.DETAIL_MODULE_ROUTER)
@UseInterceptors(CacheInterceptor)
export class DetailController extends EngineController{
	constructor(private readonly detailService: DetailService) {
		super();
	}

	/**
	 * 动态参数ID处理
	 *
	 * @param {NextResponse} res
	 * @param {string} id
	 * @returns
	 * @memberof qDetailController
	 */
	@Get('description-query')
	@Render('detail/Detail')
	public descriptionQuery(@Req() req: any, @Res() res: any, @Query() query: any, @Param('id') id: string): any {

		return {
			...this.getPublicParams(req),	// 公有参数
			id								// 自定义参数
		};
	}

	/**
	 * 动态参数ID处理
	 *
	 * @param {NextResponse} res
	 * @param {string} id
	 * @returns
	 * @memberof DetailController
	 */
	@Get('description/:id')
	@Render('detail/Detail')
	public description(@Req() req: any, @Res() res: any, @Param('id') id: string): any {

		return {
			...this.getPublicParams(req),	// 公有参数
			id								// 自定义参数
		};
	}

	/**
	 * 其它页入口
	 *
	 * @returns {*}
	 * @memberof DetailController
	 */
	@Get('index')
	@Render('detail/Detail')
	public detail(@Req() req: any): any {
		return {
			...this.getPublicParams(req),					// 公有参数
			pageData: this.detailService.getDetailInfo()	// 调用数据返回给页面数据内容								// 自定义参数
		};
	}
}
