const { Agent } = require('http');
const env = process.env.NODE_ENV || 'production';
const config = require('configs-overload')('./configs', { env: env });
const got = require('got');
const url = require('url');

module.exports = function (req, res, next) {
    const { pathname: serverPathName } = config.api.server;
    const { host } = config.api.client;
    const { userPermissions } = config.api.endpoints;

    const endpoint = url.format({
        ...config.api.server,
        pathname: `${serverPathName}${userPermissions.pathname}`
    });

    // TODO: Переделать, когда переедем на свой балансер
    got
        .get(endpoint, {
            agent: new Agent({ keepAlive: true }),
            headers: {
                cookie: req.headers.cookie,
                userHost: host
            },
            json: true,
            retries: 1,
            timeout: 1000
        })
        .then(result => {
            req.userPermissions = result.body;

            next();
        })
        .catch(err => {
            console.error(err);

            req.userPermissions = {
                isAdmin: false,
                user: [],
                responsible: []
            };

            next();
        });
};
