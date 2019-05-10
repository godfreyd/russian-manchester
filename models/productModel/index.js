const _ = require('lodash');
const got = require('got');
const logger = require('lib/logger');

const db = require('db');
const parseSpecRules = require('models/productModel/parseSpecRules');

class ProductModel {
    static async findList(text) {
        const options = _.merge(
            { query: { '-8': text } }
        );
        const { body } = await got(options);

        return _.get(body, 'items', []);
    }

    static async updateAndFind(id, transaction) {
        try {
            await ProductModel._fetchAndUpdate(id, transaction);
        } catch (error) {
            logger.error(error);
        }

        return await db.productModel.findOne({ where: { id }, transaction });
    }

    static async _fetchAndUpdate(id, transaction) {

        const data = {
            id,
            ...ProductModel._parseSpec()
        };

        await db.productModel.upsert(data, { transaction });
    }

    static _parseSpec() {
        return _.mapValues(
            parseSpecRules,
            rules => _.reduce(
                rules,
                (value) => value,
                null
            )
        );
    }
}

module.exports = ProductModel;
