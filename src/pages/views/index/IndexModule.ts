import { Module } from '@nestjs/common';
import { IndexController } from './IndexController';
import { IndexService } from './IndexService';
import { CacheModule } from '@server/common/cache/CacheModule';

/**
 * IndexModule
 *
 * @export
 * @class IndexModule
 */
@Module({
	imports: [
		CacheModule
	],
	controllers: [IndexController],
	providers: [IndexService]
})
export class IndexModule {
	// hole
}
