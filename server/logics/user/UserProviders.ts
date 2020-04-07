import { Connection } from 'typeorm';
import { User } from '../entities/EntityUser';
import { DATABASE_CONNECTION, USER_REPOSITORY } from '../database/DatabaseConstants';

/** user provider */
export const userProviders: Array<any> = [
	{
		provide: USER_REPOSITORY,
		useFactory: (connection: Connection): any => connection.getRepository(User),
		inject: [DATABASE_CONNECTION],
	},
];
