import { HttpServer, Injectable } from '@nestjs/common';
import { parse } from 'url';
import { ErrorRenderer, Renderer, RequestHandler } from './render.types';

/**
 * render service
 *
 * @class RenderService
 */
@Injectable()
class RenderService {
	private requestHandler?: RequestHandler;
	private renderer?: Renderer;
	private errorRenderer?: ErrorRenderer;
	private res?: any;
	private req?: any;

	/**
	 * 设置next提供的默认Request请求处理程序
	 * @param handler
	 */
	public setRequestHandler(handler: RequestHandler): void {
		this.requestHandler = handler;
	}

	/**
	 * 获取默认Request控制器
	 */
	public getRequestHandler(): RequestHandler | undefined {
		return this.requestHandler;
	}

	/**
	 * 设置next提供的默认Render处理程序
	 * @param renderer
	 */
	public setRenderer(renderer: Renderer): void {
		this.renderer = renderer;
	}

	/**
	 * 获取默认Render控制器
	 */
	public getRenderer(): Renderer | undefined {
		return this.renderer;
	}

	/**
	 * 设置 nextjs 错误渲染器
	 */
	public setErrorRenderer(errorRenderer: ErrorRenderer): void {
		this.errorRenderer = errorRenderer;
	}

	/**
	 * 获取 nextjs 错误渲染器
	 */
	public getErrorRenderer(): ErrorRenderer | undefined {
		return this.errorRenderer;
	}

	/**
	 * 设置 req 和 res
	 * @param req
	 * @param res
	 */
	public next(req: any, res: any): void {
		this.req = req;
		this.res = res;
	}

	/**
	 * 绑定到嵌套正在使用和重写的HttpServer的呈现函数
	 * 使它允许next呈现页面
	 * @param server
	 */
	public bindHttpServer(server: HttpServer): void {
		server.render = (_: any, view: string, options: any): any => {
			const renderer: any = this.getRenderer();

			if (this.req && this.res && renderer) {
				return renderer(this.req, this.res, `/views/${view}`, options);
			} else if (!this.req) {
				throw new Error('RenderService: req is not defined.');
			} else if (!this.res) {
				throw new Error('RenderService: res is not defined.');
			} else if (!renderer) {
				throw new Error('RenderService: renderer is not set.');
			}

			throw new Error('RenderService: failed to render');
		};
	}
}

export default RenderService;
