import { Module } from '@nestjs/common';
import { NextModule } from '../../logics/next/NextModule';
import { AuthLogicalModule } from '../../logics/auth/AuthLogicalModule';
import { HomeController } from './HomeController';

/**
 * 首页模块
 *
 * @export
 * @class HomeModule
 */
@Module({
	imports: [NextModule, AuthLogicalModule],
	controllers: [HomeController]
})
export class HomeModule {}
