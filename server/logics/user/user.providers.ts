import { Connection } from 'typeorm';
import { User } from '../../entities/user.entity';
import { DATABASE_CONNECTION, USER_REPOSITORY } from '../database/constants';

/** user provider */
export const userProviders: Array<any> = [
	{
		provide: USER_REPOSITORY,
		useFactory: (connection: Connection): any => connection.getRepository(User),
		inject: [DATABASE_CONNECTION],
	},
];
