const _ = require('lodash');
const db = require('db');

class Product {
    constructor(data) {
        this._data = data;
    }

    static async getMaterials() {
        const products = await db.product.findAll({ attributes: ['material'] });

        return _(products)
            .map(({ material }) => ({
                material: material || null
            }))
            .uniqBy(JSON.stringify)
            .value();
    }

    static async getPrices() {
        const min = await Product._getPrice([['price', 'ASC']]);
        const max = await Product._getPrice([['price', 'DESC']]);

        return { min, max };
    }

    static async _getPrice(order) {
        const product = {
            model: db.product,
            as: 'products',
            attributes: [],
            required: true
        };
        const productModel = await db.productModel.findAll({
            attributes: ['price'],
            where: { price: { $ne: null } },
            limit: 1,
            include: product,
            order
        });

        return _.get(productModel, '0.price');
    }

    async save(transaction) {
        return await db.product.upsert(this._data, { transaction }).then(async (t) => {
            return await db.product.findById(this._data.id, { t });
        });
    }
}

module.exports = Product;
