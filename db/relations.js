// eslint-disable-next-line max-statements
module.exports = tables => {
    tables.event.belongsTo(tables.textile, { as: 'textiles', foreignKey: 'textileId' });

    tables.textile.hasMany(tables.event, { as: 'events', foreignKey: 'textileId' });

    tables.textile.belongsTo(tables.textileGood, { as: 'good', foreignKey: 'goodId' });

    tables.textileGood.hasMany(tables.textile, { as: 'textiles', foreignKey: 'goodId' });





    // tables.product.belongsTo(tables.productModel, { as: 'model', foreignKey: 'modelId' });


    // tables.productModel.hasMany(tables.product, { as: 'products', foreignKey: 'modelId' });

    tables.category.hasMany(tables.product, { as: 'products', foreignKey: 'categoryId' });

};
