const username = require('username');

module.exports = (req, res, next) => {
    req.blackbox = { login: username.sync() };

    next();
};
