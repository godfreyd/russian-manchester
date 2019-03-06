const db = require('db');

module.exports = async (req, res, next) => {
    await db.sequelize.transaction(transaction => (async () => {

        res.locals.transaction = transaction;

        await next();
    })());
};
