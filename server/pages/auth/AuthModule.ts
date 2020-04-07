import { Module } from '@nestjs/common';
import { NextModule } from '../../logics/next/NextModule';
import { AuthModule } from '../../logics/auth/AuthModule';
import { AuthController } from './AuthController';
import { ApiAuthController } from './api/ApiAuthController';

/**
 * Auth模块
 *
 * @export
 * @class AuthModule
 */
@Module({
	imports: [NextModule, AuthModule],
	controllers: [AuthController, ApiAuthController]
})
export class AuthlModule {}
