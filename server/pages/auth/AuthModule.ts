import { Module } from '@nestjs/common';
import { NextModule } from '../../logics/next/NextModule';
import { AuthLogicalModule } from '../../logics/auth/AuthLogicalModule';
import { AuthController } from './AuthController';
import { ApiAuthController } from './api/ApiAuthController';

/**
 * Auth模块
 *
 * @export
 * @class AuthModule
 */
@Module({
	imports: [NextModule, AuthLogicalModule],
	controllers: [AuthController, ApiAuthController]
})
export class AuthlModule {}
