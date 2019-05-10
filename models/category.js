const db = require('db');
const slug = require('lib/slug');

class Category {
    constructor(data) {
        this._data = data;
    }

    get id() {
        return slug(this._data.name);
    }

    static async findCategories() {
        const attributes = [
            'id',
            'name',
            'description',
            'link',
            'fqdn'
        ];

        return await db.category.findAll({
            attributes
        });
    }
}

module.exports = Category;
