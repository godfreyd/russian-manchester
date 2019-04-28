const url = require('url');

module.exports = req => {
    const parsedUrl = url.parse(req.originalUrl);

    return url.format({
        protocol: req.protocol,
        host: req.headers.host,
        pathname: parsedUrl.pathname,
        query: parsedUrl.query,
        search: parsedUrl.search
    });
};
