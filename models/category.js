const _ = require('lodash');

const db = require('db');
const slug = require('lib/slug');

class Category {
    constructor(data) {
        this._data = _.omit(data, 'subСategories');
    }

    get id() {
        return slug(this._data.name);
    }

    static async findCategories() {
        const attributes = [
            'id',
            'name',
            'description',
            'fqdn'
        ];
        const subСategories = {
            model: db.subСategory,
            as: 'subСategories',
            attributes: ['id', 'name']
        };
        const include = [subСategories];
        const order = [
            ['id'],
            [subСategories, 'id']
        ];

        return await db.category.findAll({
            attributes,
            include,
            order
        });
    }

    static async findById(id) {
        return await db.category.findOne({
            where: { id }
        });
    }

    static async findByFqdn(fqdn) {
        return await db.category.findOne({
            where: { fqdn },
            attributes: ['id']
        });
    }

    async save(transaction) {
        const values = {
            id: this.id,
            ...this._data
        };

        return await db.category.create(values, { transaction });
    }

    async edit(categoryId, transaction) {
        const where = { id: categoryId };

        return await db.category.update(this._data, { where, transaction });
    }
}

module.exports = Category;
