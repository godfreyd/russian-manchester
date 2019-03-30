require('@babel/register')(require('../../.babelrc').server);
const webpack = require('webpack');
const hotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../../webpack/client.config');
const ssr = require('../../src/ssr.jsx').default;
const compiler = webpack(webpackConfig);

module.exports = [
    // Отвечает за сборку и отдачу статики из этой сборки
    webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        historyApiFallback: true,
        stats: {
            colors: true
        }
    }),
    hotMiddleware(compiler),
    (req, res, next) => {
        res.render = ssr;
        next();
    }
];
