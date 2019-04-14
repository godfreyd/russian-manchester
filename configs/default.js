const os = require('os');
const { APP_VERSION } = process.env;

module.exports = {
    csp: {
        directives: {
            defaultSrc: ["'none'"],
            scriptSrc: ["'self'", "'unsafe-eval'", "'unsafe-inline'", 'mc.yandex.ru', (req, res) => `'nonce-${res.locals.nonce}'` ],
            styleSrc: ["'self'", "'unsafe-inline'", 'mc.yandex.ru'],
            fontSrc: ["'self'", 'data:'],
            mediaSrc: ["'self'"],
            imgSrc: ["'self'", 'data:', 'mc.yandex.ru'],
            connectSrc: ["'self'", 'mc.yandex.ru', 'hypermarket.ru']
        }
    },

    logs: {
        name: 'hypermarket-fe',
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
        // host: os.hostname(),
        host: 'localhost',
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

    locations: {
        operator: ['operator', 'takeAway', 'expired'],
        free: ['tesseract', 'unreserved'],
        unavailable: ['service', 'inventory', 'undefined'],
        withoutTesseract: ['giveAway', 'undefined', 'takeAway'],
        door: ['doorOpen', 'doorClose'],
        technical: ['service', 'destroyed']
    },

    notify: {
        telegram: 'https://telegram.me/YaNotifyBot'
    },

    startYear: '2019'
};
