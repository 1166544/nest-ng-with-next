import Tokens from 'csrf';

/**
 * CSRF
 *
 * @class SecurityCsrf
 */
export class SecurityCsrf {

	private static _instance: SecurityCsrf = new SecurityCsrf();
	private tokens: Tokens;
	private secret!: string;
	private token!: string;

	constructor() {
		if (SecurityCsrf._instance) {
			throw new Error('Error: Instantiation failed: Use SecurityCsrf.getInstance() instead of new.');
		}
		SecurityCsrf._instance = this;

		// sec config
		this.tokens = new Tokens();

		// update token
		this.update();
	}

	/**
	 * 更新TOKEN
	 *
	 * @private
	 * @memberof SecurityCsrf
	 */
	private update(): void {
		this.secret = this.tokens.secretSync();
		this.token = this.tokens.create(this.secret);
	}

	/**
	 * 获取传输TOKEN
	 *
	 * @returns {string}
	 * @memberof SecurityCsrf
	 */
	public getToken(): string {
		return this.token;
	}

	/**
	 * 验证有效性
	 *
	 * @param {string} token
	 * @returns {boolean}
	 * @memberof SecurityCsrf
	 */
	public vertify(token: string): boolean {
		return this.tokens.verify(this.secret, token);
	}

	/**
	 * 配置单例
	 *
	 * @static
	 * @returns {BaseConfig}
	 * @memberof BaseConfig
	 */
	public static getInstance(): SecurityCsrf {
		return SecurityCsrf._instance;
	}
}
