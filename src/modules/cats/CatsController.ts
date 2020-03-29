import {
	Body,
	Controller,
	Get,
	Param,
	Post,
	ParseIntPipe
} from '@nestjs/common';
import { Routers } from '../../routers/RoutersServer';
import { CatsService } from './CatsService';
import { CreateCatDto } from './dto/CatsCreateDto';
import { ICat } from './interfaces/ICats';

/**
 * Cats controller
 *
 * @export
 * @class CatsController
 */
@Controller(Routers.CATS_MODULE_ROUTER)
export class CatsController {
	constructor(private readonly catsService: CatsService) { }

	/**
	 * Find one
	 *
	 * @param {*} id
	 * @memberof CatsController
	 */
	@Get(':id')
	public findOne(
		@Param('id', new ParseIntPipe())
		id: any
	): any {
		return 'Test';
	}
}
