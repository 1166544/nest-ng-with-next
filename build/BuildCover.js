const fs = require('fs');
const path = require('path');

const arguments = process.env.NODE_ENV || 'production';
let file = '';
const coverPath = path.resolve(__dirname, '../.env');

const replacestr = 'Replace ENV:: ';

switch (arguments) {
	case 'development':
		file =
`CACHE_TTL=5
ENV=development`;
		fs.writeFileSync(coverPath, file);
		console.log(replacestr, arguments);
		break;

	case 'production':
		file =
`CACHE_TTL=5
ENV=production`;
		fs.writeFileSync(coverPath, file);
		console.log(replacestr, arguments);
		break;

	default:
		file =
`CACHE_TTL=5
ENV=production`;
		fs.writeFileSync(coverPath, file);
		console.log(replacestr, arguments);
		break;
}
