const _ = require('lodash');
const os = require('os');

const { APP_VERSION } = process.env;

module.exports = {
    csp: {
        policies: {
            'default-src': ['\'none\'']
        },
        useDefaultReportUri: true
    },

    logs: {
        name: 'market-fe',
        streams: [{
            level: 'info',
            stream: process.stdout
        }],
        excludes: ['*']
    },

    render: {
        entry: './app/build.js',
        webpackConfig: '../webpack.config.js',
        publicPath: '/'
    },

    server: {
        host: os.hostname(),
        port: process.env.PORT || 8080
    },

    statics: {
        host: `/static/${APP_VERSION}`,
        dir: './static',
        www: './www'
    },

    links: {
        reportProblemForm: 'https://forms.yandex-team.ru/surveys/11161/',
        faqPage: 'https://wiki.yandex-team.ru/hypercube/User-guide/Troubleshooting/',
        aboutPage: 'https://wiki.yandex-team.ru/hypercube'
    },

    sentry: {
        dsn: process.env.SENTRY_DSN
    },

    notify: {
        telegram: 'https://telegram.me/YaNotifyBot'
    },

    startYear: '2019'
};
