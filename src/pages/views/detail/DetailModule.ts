import { Module } from '@nestjs/common';
import { DetailController } from './DetailController';
import { DetailService } from './DetailService';
import { CacheModule } from '@server/common/cache/CacheModule';

/**
 * detail module
 *
 * @export
 * @class DetailModule
 */
@Module({
	imports: [
		CacheModule
	],
	controllers: [DetailController],
	providers: [DetailService]
})
export class DetailModule {
	// hole
}
