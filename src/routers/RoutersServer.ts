/**
 * 顶层路由列表
 *
 * @export
 * @class Routers
 */
export class Routers {

	/**
	 * cats router /api/cats/....visit
	 */
	public static CATS_MODULE_ROUTER: string = 'cats';

	/**
	 * transport router /api/transport/....visit
	 */
	public static TRANSPORT_MODULE_ROUTER: string = 'api/transport';

	/**
	 * local router /api/local/....visit
	 */
	public static LOCAL_MODULE_ROUTER: string = 'local';

	/**
	 * detail router /detail/....visit
	 */
	public static DETAIL_MODULE_ROUTER: string = 'detail';

	/**
	 * detail router /index/....visit
	 */
	public static INDEX_MODULE_ROUTER: string = 'index';
}
