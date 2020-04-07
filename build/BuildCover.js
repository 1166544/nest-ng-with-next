const fs = require('fs');
const path = require('path');

const arguments = process.env.NODE_ENV || 'production';
let file = '';
const coverPath = path.resolve(__dirname, '../.env');

const replacestr = 'Replace ENV:: ';

switch (arguments) {
	case 'development':
		file =
`DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=apollouser
DB_PASSWORD=apollopass
DB_DATABASE=apollodb
DB_SYNCHRONIZE=true

APP_PROTOCOL=http
APP_HOST=localhost
APP_PORT=8088
APP_SESSION_SECRET=apollo

CACHE_TTL=5
ENV=development
`;
		fs.writeFileSync(coverPath, file);
		console.log(replacestr, arguments);
		break;

	case 'production':
		file =
`DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=apollouser
DB_PASSWORD=apollopass
DB_DATABASE=apollodb
DB_SYNCHRONIZE=true

APP_PROTOCOL=http
APP_HOST=localhost
APP_PORT=8088
APP_SESSION_SECRET=apollo

CACHE_TTL=5
ENV=production
`;
		fs.writeFileSync(coverPath, file);
		console.log(replacestr, arguments);
		break;

	default:
		file =
`DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=apollouser
DB_PASSWORD=apollopass
DB_DATABASE=apollodb
DB_SYNCHRONIZE=true

APP_PROTOCOL=http
APP_HOST=localhost
APP_PORT=8088
APP_SESSION_SECRET=apollo

CACHE_TTL=5
ENV=production
`;
		fs.writeFileSync(coverPath, file);
		console.log(replacestr, arguments);
		break;
}
