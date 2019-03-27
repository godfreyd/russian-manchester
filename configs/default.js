const os = require('os');
const { APP_VERSION } = process.env;

module.exports = {

    statics: {
        host: `/static/${APP_VERSION}`,
        dir: './static',
        www: './www'
    },

    server: {
        host: os.hostname(),
        port: process.env.PORT || 8080
    },
};
