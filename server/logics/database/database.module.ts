import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

/**
 * db module
 *
 * @export
 * @class DatabaseModule
 */
@Module({
	providers: [...databaseProviders],
	exports: [...databaseProviders],
})
export class DatabaseModule {}
