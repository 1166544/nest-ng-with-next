import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import RenderService from '@server/common/render/RenderService';

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
	public resolve(...args: any[]): MiddlewareFunction {
		return (req: any, res: any, next: any): any => {
			this.renderService.next(req, res);
			if (next) {
				next();
			}
		};
	}
}

export default RenderMiddleware;
