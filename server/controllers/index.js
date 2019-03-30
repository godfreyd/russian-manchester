const ssr = require('../../src/ssr.jsx').default;

module.exports = function (req, res, next) {
    const result = ssr();
    res.send(result.html);
}
