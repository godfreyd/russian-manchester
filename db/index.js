const _ = require('lodash');
const dotenv = require('dotenv').config();
const config = require('configs-overload')('./configs', { env: 'development' });
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

config.db.options.operatorsAliases = {
    $like: Op.like,
    $lte: Op.lte,
    $and: Op.and,
    $or: Op.or,
    $eq: Op.eq,
    $gt: Op.gt,
    $lt: Op.lt
}

if (dotenv.error) {
    let error = dotenv.error;
    logger.error('Dotenv error:', { error });
}

const sequelize = new Sequelize(config.db.uri, config.db.options);
const tables = require('db/tables')(sequelize);

require('db/relations')(tables);

module.exports = _.assign({ sequelize }, tables);
