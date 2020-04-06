import { Controller, Get, Req, Res } from '@nestjs/common';
import { NextService } from '../logics/next/next.service';

/**
 * auth controller
 *
 * @export
 * @class AuthController
 */
@Controller('auth')
export class AuthController {
	constructor(private readonly next: NextService) {}

	/**
	 * 注册
	 *
	 * @param {*} req
	 * @param {*} res
	 * @returns
	 * @memberof AuthController
	 */
	@Get('register')
	public showRegister(@Req() req: any, @Res() res: any): Promise<any> {
		return this.next.render('/auth/register', req, res);
	}

	/**
	 * 登录
	 *
	 * @param {*} req
	 * @param {*} res
	 * @returns
	 * @memberof AuthController
	 */
	@Get('login')
	public showLogin(@Req() req: any, @Res() res: any): Promise<any> {
		return this.next.render('/auth/login', req, res);
	}
}
