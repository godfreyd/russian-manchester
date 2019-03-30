const env = process.env.NODE_ENV || 'production';
const config = require('configs-overload')('./configs', { env: env });
const Express = require('express');
const app = new Express();
const router = require('./router');

if (config.render.hot) {
    app.use(require('./middlewares/app-render.hot'));
} else {
    app.use(require('./middlewares/app-render'));
}

app.use(Express.static(config.statics.dir));

app.use(router);

module.exports = app;
