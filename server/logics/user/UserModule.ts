import { Module } from '@nestjs/common';
// import { DatabaseModule } from '../database/database.module';
// import { userProviders } from './user.providers';
import { UserService } from './UserService';

/**
 * user module
 *
 * @export
 * @class UserModule
 */
@Module({
	imports: [],
	providers: [UserService],
	exports: [UserService],
})
export class UserModule {}
