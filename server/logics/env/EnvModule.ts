import { join } from 'path';
import { Module } from '@nestjs/common';
import { EnvService } from './EnvService';

/**
 * 环境配置模块
 *
 * @export
 * @class EnvModule
 */
@Module({
	providers: [
		{
			provide: EnvService,
			useValue: new EnvService(join(process.cwd(), '.env')),
		},
	],
	exports: [EnvService],
})
export class EnvModule {}
