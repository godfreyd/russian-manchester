module.exports = {
    csp: {
        policies: {
            'connect-src': ['\'self\'', 'mc.yandex.ru', '*.hypercube.yandex-team.ru']
        },
        useDefaultReportUri: false
    },

    render: {
        hot: true
    },

    server: {
        host: 'localhost'
    },

    statics: {
        host: '/static'
    }
};
