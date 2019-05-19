// eslint-disable-next-line max-statements
module.exports = tables => {
    tables.event.belongsTo(tables.textile, { as: 'textiles', foreignKey: 'textileId' });

    tables.textile.hasMany(tables.event, { as: 'events', foreignKey: 'textileId' });

    tables.textile.belongsTo(tables.textileGood, { as: 'good', foreignKey: 'goodId' });

    tables.textileGood.hasMany(tables.textile, { as: 'textiles', foreignKey: 'goodId' });


    tables.event.belongsTo(tables.product, { as: 'product', foreignKey: 'productId' });

    tables.product.hasMany(tables.event, { as: 'events', foreignKey: 'productId' });


    // Никто не может вставлять строки в таблицу product, которые не имеют соответствующей записи в таблице productModel. https://www.postgresql.org/docs/8.1/tutorial-fk.html
    // tables.product.belongsTo(tables.productModel, { as: 'model', foreignKey: 'modelId' });

    // tables.productModel.hasMany(tables.product, { as: 'products', foreignKey: 'modelId' });



    // tables.category.hasMany(tables.subCategory, { as: 'subCategories', foreignKey: 'categoryId' });

    tables.category.hasMany(tables.event, { as: 'events', foreignKey: 'categoryId' });

    // tables.subCategory.belongsTo(tables.category, { as: 'categories', foreignKey: 'categoryId' });

};
