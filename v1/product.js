const assert = require('lib/assert');
const Product = require('models/product');

module.exports = {

    save: async (req, res) => {

        const productData = req.body;

        assert.bySchema(productData, 'product/post');

        // TODO: добавить проверку прав на редактирование и сохранение
        // await checkEditAccess(res.locals.user.login, productData.id);

        const product = new Product(productData);

        const body = await product.save(res.locals.transaction);

        res.send(body);
    }

};
