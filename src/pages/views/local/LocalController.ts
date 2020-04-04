import {
	CacheInterceptor,
	Controller,
	Get,
	Render,
	UseInterceptors,
	Request,
	Post,
	Response,
	HttpStatus
} from '@nestjs/common';
import { LocalService } from './LocalService';
import { Routers } from '@server/routers/RoutersServer';

/**
 * Detail控制器
 *
 * @export
 * @class LocalController
 */
@Controller(Routers.LOCAL_MODULE_ROUTER)
@UseInterceptors(CacheInterceptor)
export class LocalController {
	constructor(private readonly indexService: LocalService) {
		// hole
	}

	/**
	 * 其它页入口
	 *
	 * @returns {*}
	 * @memberof DetailController
	 */
	@Post('getTestInfo')
	public detail(@Response() res: any, @Request() request: any): any {
		// 返回给页面数据内容
		res.status(HttpStatus.OK).json({'responseData': 'ok'});
	}
}
