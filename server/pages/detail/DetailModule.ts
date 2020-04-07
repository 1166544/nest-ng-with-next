import { Module } from '@nestjs/common';
import { NextModule } from '../../logics/next/NextModule';
import { AuthModule } from '../../logics/auth/AuthModule';
import { DetailController } from './DetailController';

/**
 * Detail模块
 *
 * @export
 * @class HomeModule
 */
@Module({
	imports: [NextModule, AuthModule],
	controllers: [DetailController]
})
export class DetailModule {}
