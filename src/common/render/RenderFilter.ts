import { ArgumentsHost, Catch, ExceptionFilter, Logger } from '@nestjs/common';
import { ErrorRenderer, RequestHandler } from '@server/common/render/RenderTypes';
import { parse as parseUrl } from 'url';

/**
 * render filter
 *
 * @class RenderFilter
 * @implements {ExceptionFilter}
 */
@Catch()
class RenderFilter implements ExceptionFilter {
	private readonly requestHandler: RequestHandler;
	private readonly errorRenderer: ErrorRenderer;
	private readonly logger: Logger;

	constructor(requestHandler: RequestHandler, errorRenderer: ErrorRenderer) {
		this.requestHandler = requestHandler;
		this.logger = new Logger();
		this.errorRenderer = errorRenderer;
	}

	/**
	 * Nest不知道next如何处理构建资产的路由，因此让next处理未由控制器处理的任何请求的路由
	 * 交由Next接管
	 * @param err
	 * @param ctx
	 */
	public async catch(err: any, ctx: ArgumentsHost): Promise<any> {
		const [req, res]: Array<any> = ctx.getArgs();

		if (!res.headersSent) {
			if (err.response === undefined) {
				const { pathname, query } = parseUrl(req.url, true);
				this.logger.error(err.message, err.stack);
				await this.errorRenderer(err, req, res, pathname, query);
			} else {
				await this.requestHandler(req, res);
			}
		}
	}
}

export default RenderFilter;
