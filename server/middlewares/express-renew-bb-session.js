const url = require('url');

const getRetpath = require('../lib/retpath');

module.exports = config => (req, res, next) => {
    if (req.method === 'GET' && req.blackbox.status === 'NEED_RESET') {
        const passUrl = url.format({
            protocol: config.protocol,
            host: config.host + req.tld,
            pathname: config.pathname,
            query: { retpath: getRetpath(req) }
        });

        res.redirect(passUrl);

        return;
    }

    next();
};
