const _ = require('lodash');
const env = process.env.NODE_ENV || 'development';
const config = require('configs-overload')('./configs', { env: env });

function prepareData(req) {
    return {
        bundle: 'index',
        env: process.env.NODE_ENV,
        lang: 'ru',
        nonce: req.nonce,
        staticHost: config.statics.host,
        links: config.links,
        startYear: config.startYear,
        notify: config.notify
    };
}

module.exports = function (req, res, next) {
    const data = prepareData(req);

    const titles = {
        seo: {
            title: 'Маркет'
        }
    };

    data.title = _.get(titles, 'seo.title');

    res.render('index', req.url, data)
        .then(({ redirectUrl, html }) => {
            if (redirectUrl) {
                res.redirect(redirectUrl);
            } else {
                res.send(html);
            }
        })
        .catch(err => next(err));
};
