module.exports = {

    csp: {
        directives: {
            connectSrc: ["'self'", 'mc.yandex.ru', '*.hypermarket.ru']
        }
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
