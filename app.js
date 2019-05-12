const express = require('express');
const env = process.env.NODE_ENV || 'development';
const config = require('configs-overload')('./configs', { env: env });
const shortid = require('shortid');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('./logger');
const { maskProps } = require('lib/maskHelper');

const { requestLogger } = logger;

const corsOptions = {
    origin: config.cors.origin,
    allowedHeaders: 'Content-Type',
    methods: ['GET', 'POST', 'OPTIONS', 'DELETE'],
    credentials: true
}

app
    .disable('x-powered-by')
    .enable('trust proxy')
    .use(cors(corsOptions))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(async (req, res, next) => {
        const uid = shortid.generate();

        try {
            requestLogger(req, res, uid);
            await next();
        } catch (error) {

            const maskedOptions = maskProps(error.options, ['login', 'operator']);

            logger.error(error, { ...maskedOptions, uid });

            res.status = error.status || error.statusCode || 500;
            res.send({ message: error.message, ...error.options });
        }
    });

const v1 = require('v1');

app.use('/api/v1/', v1);

module.exports = app;
