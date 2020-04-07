import { Module } from '@nestjs/common';
import { NextModule } from '../../logics/next/NextModule';
import { AuthLogicalModule } from '../../logics/auth/AuthLogicalModule';
import { DetailController } from './DetailController';

/**
 * Detail模块
 *
 * @export
 * @class HomeModule
 */
@Module({
	imports: [NextModule, AuthLogicalModule],
	controllers: [DetailController]
})
export class DetailModule {}
