import ky from 'ky-universal';

/**
 * http encup
 *
 * @export
 * @class Http
 */
export class Http {
	private readonly http: typeof ky;

	constructor() {
		this.http = ky.create({
			throwHttpErrors: false,
			prefixUrl: `${process.env.APP_PROTOCOL}://${process.env.APP_HOST}:${process.env.APP_PORT}`,
		});
	}

	/**
	 * get
	 *
	 * @param {string} url
	 * @returns {Promise<Response>}
	 * @memberof Http
	 */
	public async get(url: string): Promise<Response> {
		return this.http.get(url);
	}

	/**
	 * post
	 *
	 * @param {string} url
	 * @param {*} [data]
	 * @returns {Promise<Response>}
	 * @memberof Http
	 */
	public async post(url: string, data?: any): Promise<Response> {
		return this.http.post(url, { json: data });
	}

	/**
	 * pub
	 *
	 * @param {string} url
	 * @param {*} [data]
	 * @returns {Promise<Response>}
	 * @memberof Http
	 */
	public async put(url: string, data?: any): Promise<Response> {
		return this.http.put(url, { json: data });
	}

	/**
	 * delete
	 *
	 * @param {string} url
	 * @returns {Promise<Response>}
	 * @memberof Http
	 */
	public async delete(url: string): Promise<Response> {
		return this.http.delete(url);
	}
}
