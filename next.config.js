const withTypescript = require('@zeit/next-typescript');
const path = require('path');
const withLess = require('@zeit/next-less');

module.exports = withTypescript(withLess({
	useFileSystemPublicRoutes: false,
	webpack: function(config, { buildId, dev }) {
		const originalEntry = config.entry;

		config.resolve = {
			...config.resolve,
			...{
				alias: {
					...config.resolve.alias,
					'@src': path.resolve(__dirname, 'client')
				}
			}
		};

		return config;
	}
}));
