import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { NextService } from '../../logics/next/NextService';

/**
 * detail controller
 *
 * @export
 * @class AuthController
 */
@Controller()
export class DetailController {
	constructor(private readonly next: NextService) {}

	/**
	 * show detail
	 *
	 * @param {Request} req
	 * @param {Response} res
	 * @returns
	 * @memberof HomeController
	 */
	@Get('detail')
	public showDetail(@Req() req: Request, @Res() res: Response): Promise<any> {
		// 指定渲染路径
		return this.next.render('/detail/Detail', req, res);
	}
}
