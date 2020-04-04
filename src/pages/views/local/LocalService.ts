import { Injectable } from '@nestjs/common';

/**
 * LocalService
 *
 * @export
 * @class LocalService
 */
@Injectable()
export class LocalService {

	/**
	 * getDetailInfo
	 *
	 * @returns {*}
	 * @memberof LocalService
	 */
	public getPageInfo(): any {
		return {
			title: `Test local page detail ${Date.now()}`,
			content: 'test content detail'
		};
	}
}
