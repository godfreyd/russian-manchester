require('dotenv').config();
const env = process.env.NODE_ENV || 'production';
const config = require('configs-overload')('./configs', { env: env });

const app = require('./server');

app.listen(config.server.port, function () {
	console.log(`Listen on http://${config.server.host}:${config.server.port}`);
});
