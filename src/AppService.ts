import { Injectable } from '@nestjs/common';

/**
 * app service
 *
 * @export
 * @class AppService
 */
@Injectable()
export class AppService {

	/**
	 * root
	 *
	 * @returns {*}
	 * @memberof AppService
	 */
	public root(): any {
		return {
			title: 'Test page',
			content: 'test content'
		};
	}
}
