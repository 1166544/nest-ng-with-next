import { Entity, Column, PrimaryColumn } from 'typeorm';

/**
 * session实体
 *
 * @export
 * @class Session
 */
@Entity()
export class Session {
	@PrimaryColumn({
		type: 'varchar',
		collation: 'default',
	})
	public sid!: string;

	@Column('json')
	public sess!: string;

	@Column('timestamp')
	public expire!: number;
}
