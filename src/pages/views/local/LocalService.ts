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
	public getIndexInfo(): any {
		return {
			title: `Test page detail ${Date.now()}`,
			content: 'test content detail'
		};
	}
}
