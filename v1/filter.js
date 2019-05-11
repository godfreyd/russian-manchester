const Product = require('models/product');
const Category = require('models/category');

module.exports = {
    getFilters: async (req, res) => {

        const categories = await Category.findCategories();

        const body = {
            categories: categories,
            materials: await Product.getMaterials(),
            prices: await Product.getPrices()
        };

        res.send(body);
    }
};
