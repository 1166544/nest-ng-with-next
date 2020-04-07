import { Module } from '@nestjs/common';
import { NextModule } from '../../logics/next/NextModule';
import { AuthModule } from '../../logics/auth/AuthModule';
import { HomeController } from './HomeController';

/**
 * 首页模块
 *
 * @export
 * @class HomeModule
 */
@Module({
	imports: [NextModule, AuthModule],
	controllers: [HomeController]
})
export class HomeModule {}
