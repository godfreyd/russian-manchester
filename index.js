const dotenv = require('dotenv').config();
const logger = require('./logger');
const app = require('app');
const endpoint = process.env.HTTP_PORT || 8080;

if (dotenv.error) {
    let error = dotenv.error;
    logger.error('Dotenv error:', { error });
}

app.listen(endpoint, () => {
    logger.info('Instance started', { endpoint });
});
