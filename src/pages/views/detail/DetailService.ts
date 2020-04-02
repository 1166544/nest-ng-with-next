import { Injectable } from '@nestjs/common';

/**
 * DetailService
 *
 * @export
 * @class DetailService
 */
@Injectable()
export class DetailService {

	/**
	 * getDetailInfo
	 *
	 * @returns {*}
	 * @memberof DetailService
	 */
	public getDetailInfo(): any {
		return {
			title: 'Test page detail',
			content: 'test content detail'
		};
	}
}
