import { All, Controller, HttpCode, Req, HttpStatus, Post, Body } from '@nestjs/common';
import { TransportService } from './TransportService';
import { Routers } from '../../routers/RoutersServer';
import { SecurityCsrf } from '../security/SecurityCsrf';

/**
 * 中转服务CONTROLLER处理器
 *
 * @export
 * @class TransportController
 * @extends {EngineController}
 */
@Controller(Routers.TRANSPORT_MODULE_ROUTER)
export class TransportController {
	constructor(
		private readonly transportService: TransportService
	) {
		// hole
	}

	/**
	 * 中转服务接收
	 *
	 * @param {*} request
	 * @returns
	 * @memberof TransportController
	 */
	@HttpCode(HttpStatus.OK)
	@All('getTransportData')
	public async getTransportData(@Req() request: any): Promise<any> {
		const token: string = request.headers['x-xsrf-token'];
		const vertify: boolean = SecurityCsrf.getInstance().vertify(token);

		let result: any = await this.transportService.getTransportData(request);

		if (result === undefined) {
			result = {
				code: HttpStatus.INTERNAL_SERVER_ERROR,
				message: 'Internal server error'
			};

			return result;
		} else {
			return result.data;
		}
	}
}
