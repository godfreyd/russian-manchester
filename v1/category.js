const assert = require('lib/assert');
const Category = require('models/category');

async function checkCategoryCreateParams(category, data, transaction) {
    const isExistingId = await Category.findById(category.id);

    assert(!isExistingId, 'Category with same id already exists', 400, 'TIE', {
        id: category.id
    });

    const isExistingFqdn = await Category.findByFqdn(data.fqdn);

    assert(!isExistingFqdn, 'Category with same FQDN already exists', 400, 'TFE', {
        fqdn: data.fqdn
    });

}

module.exports = {
    save: async (req, res) => {
        const { transaction } = res.locals.transaction;
        const data = req.body;

        assert.bySchema(data, 'category/post');

        // TODO: добавить проверку, когда будет аутентификация
        // await checkCreateAccess(res.locals.user.login);

        const category = new Category(data);

        assert.categoryName(data.name);
        assert.categoryIdentity(category.id);

        await checkCategoryCreateParams(category, data, transaction);

        await category.save(transaction);

        res.status(201).end();
    },

    edit: async (req, res) => {
        const { transaction } = res.locals.transaction;
        const { id } = req.params;

        const data = req.body;

        assert.bySchema(data, 'category/patch');

        const isExistingId = await Category.findById(id);

        assert(isExistingId, 'Category not found', 404, 'TNF', {
            id
        });

        // TODO: добавить проверку, когда будет аутентификация
        // await checkEditAccess(res.locals.user.login, id);

        const category = new Category(data);

        assert.tryCategoryName(data.name);

        await checkCategoryEditParams(category, id, data, transaction);

        await category.edit(id, transaction);

        res.status(204).end();
    }
};

