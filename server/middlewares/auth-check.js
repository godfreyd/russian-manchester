const url = require('url');

const getRetpath = require('../lib/retpath');

module.exports = config => (req, res, next) => {
    if (req.blackbox.login) {
        next();

        return;
    }

    const authUrl = url.format({
        protocol: config.protocol,
        host: config.host + req.tld,
        pathname: config.pathname,
        query: { retpath: getRetpath(req) }
    });

    res.redirect(authUrl);
};
