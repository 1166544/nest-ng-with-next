import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { NextService } from '../logics/next/next.service';

/**
 * home controller
 *
 * @export
 * @class HomeController
 */
@Controller()
export class HomeController {
	constructor(private readonly next: NextService) {}

	/**
	 * show home
	 *
	 * @param {Request} req
	 * @param {Response} res
	 * @returns
	 * @memberof HomeController
	 */
	@Get()
	public showHome(@Req() req: Request, @Res() res: Response): Promise<any> {
		// 指定渲染路径
		return this.next.render('/index', req, res);
	}
}
