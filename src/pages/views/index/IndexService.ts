import { Injectable } from '@nestjs/common';

/**
 * DetailService
 *
 * @export
 * @class DetailService
 */
@Injectable()
export class IndexService {

	/**
	 * getDetailInfo
	 *
	 * @returns {*}
	 * @memberof DetailService
	 */
	public getIndexInfo(): any {
		return {
			title: 'Test page detail',
			content: 'test content detail'
		};
	}
}
