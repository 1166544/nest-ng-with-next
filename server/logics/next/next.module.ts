import { Module } from '@nestjs/common';
import next from 'next';
import { ServerConstructor } from 'next/dist/next-server/server/next-server';
import { NextService } from './next.service';

/** next server contrustor */
type NextServerConstructor = Omit<ServerConstructor, 'staticMarkup'> & {
	dev?: boolean;
};

/**
 * next module
 *
 * @export
 * @class NextModule
 */
@Module({
	providers: [NextService],
	exports: [NextService],
})
export class NextModule {
	constructor(private readonly next: NextService) {}

	/**
	 * prepare
	 *
	 * @param {NextServerConstructor} [options]
	 * @returns {Promise<any>}
	 * @memberof NextModule
	 */
	public async prepare(options?: NextServerConstructor): Promise<any> {
		const app: any = next(
			{
				dev: process.env.NODE_ENV !== 'production',
				dir: process.cwd(),
				...(options || {})
			}
		);

		return app.prepare().then((): any => this.next.setApp(app));
	}
}
