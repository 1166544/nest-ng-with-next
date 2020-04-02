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
	public root(): string {
		return 'Welcome Apollo!';
	}
}
