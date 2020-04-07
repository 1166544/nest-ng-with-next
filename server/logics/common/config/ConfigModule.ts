import { Global, Module } from '@nestjs/common';
import { ConfigService } from './ConfigService';

/**
 * config module
 *
 * @export
 * @class ConfigModule
 */
@Global()
@Module({
	providers: [ConfigService],
	exports: [ConfigService]
})
export class ConfigModule {
	// hole
}
