import bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../../entities/user.entity';

/**
 * Auth service
 *
 * @export
 * @class AuthService
 */
@Injectable()
export class AuthService {
	constructor(private readonly userService: UserService) {
		// hole
	}

	/**
	 * register user if not exist
	 *
	 * @param {string} name
	 * @param {string} email
	 * @param {string} password
	 * @returns {Promise<any>}
	 * @memberof AuthService
	 */
	public async registerUserIfNotExist(
		name: string,
		email: string,
		password: string
	): Promise<any> {
		let user: User | undefined = await this.userService.findOneByEmail(
			email
		);

		if (user && (await bcrypt.compare(password, user.password))) {
			const { password, ...result } = user;

			return result;
		}

		user = await this.userService.save(
			await this.userService.create({
				name,
				email,
				password,
			})
		);

		if (user) {
			const { password, ...result } = user;

			return result;
		}

		return null;
	}

	/**
	 * validate user
	 *
	 * @param {string} email
	 * @param {string} password
	 * @returns {Promise<any>}
	 * @memberof AuthService
	 */
	public async validateUser(email: string, password: string): Promise<any> {
		const user: User | undefined = await this.userService.findOneByEmail(
			email
		);

		if (user && (await bcrypt.compare(password, user.password))) {
			const { password, ...result } = user;

			return result;
		}

		return null;
	}
}
