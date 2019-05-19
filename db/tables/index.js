module.exports = sequelize => ({
    textile: sequelize.import('textile'),
    textileGood: sequelize.import('textileGood'),
    event: sequelize.import('event'),
    // role: sequelize.import('role')
    product: sequelize.import('product'),
    productModel: sequelize.import('productModel'),
    category: sequelize.import('category'),
    subСategory: sequelize.import('subСategory')
});
