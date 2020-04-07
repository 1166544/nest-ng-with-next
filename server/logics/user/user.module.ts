import { Module } from '@nestjs/common';
// import { DatabaseModule } from '../database/database.module';
// import { userProviders } from './user.providers';
import { UserService } from './user.service';

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
