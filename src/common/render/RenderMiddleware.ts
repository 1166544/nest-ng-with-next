import { Injectable, NestMiddleware } from '@nestjs/common';
import RenderService from '@server/common/render/RenderService';
import { Request, Response } from '@server/Types';

/**
 * render middleware
 *
 * @class RenderMiddleware
 * @implements {NestMiddleware}
 */
@Injectable()
class RenderMiddleware implements NestMiddleware {
	private readonly renderService: RenderService;

	constructor(renderService: RenderService) {
		this.renderService = renderService;
	}

	/**
	 * 在渲染服务中设置当前REQ和RES对象
	 * @param args
	 */
	public use(req: Request, res: Response, next: Function): any {
		this.renderService.next(req, res);
		if (next) {
			next();
		}
	}
}

export default RenderMiddleware;
