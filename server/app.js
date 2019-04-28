const bunyanLogger = require('express-bunyan-logger');
const env = process.env.NODE_ENV || 'production';
const config = require('configs-overload')('./configs', { env: env });
const cookieParser = require('cookie-parser');
const Express = require('express');
const uuidv4 = require('uuid/v4');
const helmet = require('helmet');
const csp = require('helmet-csp');


const authCheck = require('./middlewares/auth-check');
const expressRenewBbSession = require('./middlewares/express-renew-bb-session');
const userPermissions = require('./middlewares/user-permissions');
const router = require('./router');

const { APP_VERSION } = process.env;

const app = new Express();

app.set('env', env);
app.disable('x-powered-by');
app.disable('etag');
app.enable('trust proxy');

app.use(cookieParser());
app.use((req, res, next) => {
    res.locals.nonce = uuidv4();
    next();
});
app.use(csp(config.csp));
app.use(helmet.noSniff());
app.use(helmet.xssFilter({ setOnOldIE: true }));

if (config.render.hot) {
    app.use(require('./middlewares/app-render.hot'));
} else {
    app.use(require('./middlewares/app-render'));
}



app.use(`/static/${APP_VERSION}`, Express.static(config.statics.dir, {
    fallthrough: false,
    maxAge: '7 days'
}));

// app.use(Express.static(config.statics.dir));
app.use('/', Express.static(config.statics.www, {
    maxAge: '14 days'
}));

app.use(bunyanLogger(config.logs));

if (env === 'development') {
    app.use(require('./middlewares/mock-blackbox'));
} else {
   // TODO: passport
}

app.use(authCheck(config.passport));
app.use(expressRenewBbSession(config.pass));

app.use(userPermissions);

app.use(router);

module.exports = app;
