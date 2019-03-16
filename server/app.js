const bunyanLogger = require('express-bunyan-logger');
const env = process.env.NODE_ENV || 'development';
const config = require('configs-overload')('./configs', { env: env });
const cookieParser = require('cookie-parser');
const Express = require('express');
const helmet = require('helmet');
// const Sentry = require('@sentry/node');
const router = require('./router');

const { APP_VERSION, NODE_ENV } = process.env;

const app = new Express();

// Sentry.init({ ...config.sentry });

app.set('env', config.environment);
app.disable('x-powered-by');
app.disable('etag');
app.enable('trust proxy');

app.use(cookieParser());
app.use(helmet.noSniff());
app.use(helmet.xssFilter({ setOnOldIE: true }));

app.use(bunyanLogger(config.logs));

app.use(`/static/${APP_VERSION}`, Express.static(config.statics.dir, {
    fallthrough: false,
    maxAge: '7 days'
}));

app.use('/', Express.static(config.statics.www, {
    maxAge: '14 days'
}));

app.use(router);

module.exports = app;
