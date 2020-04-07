import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/**
 * 用户表实体
 *
 * @export
 * @class User
 */
@Entity()
export class User {

	/**
	 * id primary generated column
	 *
	 * @type {number}
	 * @memberof User
	 */
	@PrimaryGeneratedColumn()
	public id: number;

	/**
	 * name
	 *
	 * @type {string}
	 * @memberof User
	 */
	@Column('varchar')
	public name: string;

	/**
	 * account
	 *
	 * @type {string}
	 * @memberof User
	 */
	@Column('varchar', {
		unique: true,
	})
	public email: string;

	/**
	 * password
	 *
	 * @type {string}
	 * @memberof User
	 */
	@Column('varchar')
	public password: string;
}
