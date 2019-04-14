const _ = require('lodash');
const env = process.env.NODE_ENV || 'production';
const config = require('configs-overload')('./configs', { env: env });

function prepareData(res) {
    return {
        bundle: 'index',
        env: env,
        lang: 'ru',
        nonce: res.locals.nonce,
        staticHost: config.statics.host,
        links: config.links,
        locations: config.locations,
        startYear: config.startYear,
        notify: config.notify
    };
}

module.exports = function (req, res, next) {
    const data = prepareData(res);
    const tanker = require(`../../build/i18n.${data.lang}`);

    data.title = _.get(tanker, 'seo.title');

    res.render('index', req.url, data, tanker)
        .then(({ redirectUrl, html }) => {
            if (redirectUrl) {
                res.redirect(redirectUrl);
            } else {
                res.send(html);
            }
        })
        .catch(err => next(err));
};

