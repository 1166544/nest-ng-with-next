import { Injectable } from '@nestjs/common';
import { EngineService } from '@server/common/engine/EngineService';

/**
 * DetailService
 *
 * @export
 * @class DetailService
 */
@Injectable()
export class DetailService extends EngineService {

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
