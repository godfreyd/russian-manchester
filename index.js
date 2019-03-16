const dotenv = require('dotenv').config();
const env = process.env.NODE_ENV || 'development';
const config = require('configs-overload')('./configs', { env: env });

if (dotenv.error) {
    let error = dotenv.error;
    console.error('Dotenv error:', { error });
}

const app = require('./server');

app.listen(config.server.port, () => {
    console.log(`Listen on http://${config.server.host}:${config.server.port}`);
});
