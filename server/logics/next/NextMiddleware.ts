import { IncomingMessage, ServerResponse } from 'http';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextService } from './NextService';

/**
 * next middleware
 *
 * @export
 * @class NextMiddleware
 * @implements {NestMiddleware}
 */
@Injectable()
export class NextMiddleware implements NestMiddleware {
	constructor(private readonly next: NextService) {}

	/**
	 * use
	 *
	 * @param {IncomingMessage} req
	 * @param {ServerResponse} res
	 * @memberof NextMiddleware
	 */
	public use(req: IncomingMessage, res: ServerResponse): void {
		const handle: any = this.next.getApp().getRequestHandler();
		handle(req, res);
	}
}
