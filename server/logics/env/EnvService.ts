import { readFileSync } from 'fs';
import { parse } from 'dotenv';

/**
 * 环境配置服务
 *
 * @export
 * @class EnvService
 */
export class EnvService {
	private readonly config: { [key: string]: string };

	constructor(path: string) {
		this.config = parse(readFileSync(path));
	}

	/**
	 * 依据传入KEY获取对应配置
	 *
	 * @param {string} key
	 * @returns {string}
	 * @memberof EnvService
	 */
	public get(key: string): string {
		return this.config[key];
	}
}
