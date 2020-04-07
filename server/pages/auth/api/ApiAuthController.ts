import { Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { RegisterGuard, LoginGuard } from '../../../logics/auth/guards';

/**
 * api auth controller
 *
 * @export
 * @class ApiAuthController
 */
@Controller('api/auth')
export class ApiAuthController {

	/**
	 * 注册用户
	 *
	 * @param {*} req
	 * @param {*} res
	 * @memberof ApiAuthController
	 */
	@Post('register')
	@UseGuards(RegisterGuard)
	public register(@Req() req: any, @Res() res: any): any {
		res.json(req.user);
	}

	/**
	 * 登录
	 *
	 * @param {*} req
	 * @param {*} res
	 * @memberof ApiAuthController
	 */
	@Post('login')
	@UseGuards(LoginGuard)
	public login(@Req() req: any, @Res() res: any): any {
		res.json(req.user);
	}

	/**
	 * 退出登录
	 *
	 * @param {*} req
	 * @param {*} res
	 * @memberof ApiAuthController
	 */
	@Post('logout')
	public logout(@Req() req: any, @Res() res: any): any {
		req.session.destroy((): any => {
			res.json(true);
		});
	}
}
