const os = require('os');
const { APP_VERSION } = process.env;

module.exports = {

    statics: {
        host: `/static/${APP_VERSION}`,
        dir: './static',
        www: './www'
    },

    render: {
        entry: './app/build.js',
        webpackConfig: '../webpack.config.js',
        publicPath: '/'
    },

    server: {
        // host: os.hostname(),
        host: 'localhost',
        port: process.env.PORT || 8080
    },
};
