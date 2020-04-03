import { Module } from '@nestjs/common';
import { LocalController } from './LocalController';
import { LocalService } from './LocalService';
import { CacheModule } from '@server/common/cache/CacheModule';

/**
 * Local module
 *
 * @export
 * @class LocalModule
 */
@Module({
	imports: [
		CacheModule
	],
	controllers: [LocalController],
	providers: [LocalService]
})
export class LocalModule {
	// hole
}
