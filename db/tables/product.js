module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'product',
        {
            id: {
                type: DataTypes.STRING(250),
                allowNull: false,
                primaryKey: true
            },
            modelId: {
                type: DataTypes.STRING(250),
                field: 'model_id',
                defaultValue: 'default-model'
            },
            categoryId: {
                type: DataTypes.STRING(250),
                field: 'category_id'
            },
            material: DataTypes.STRING(250),
            inventory: DataTypes.STRING(250),
            brand: DataTypes.STRING(250),
            note: DataTypes.TEXT,
            discount: {
                type: DataTypes.INTEGER,
                field: 'discount',
                defaultValue: 0,
                allowNull: false
            },
            status: DataTypes.STRING(250),
            search: DataTypes.VIRTUAL
        },
        {
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            tableName: 'products'
        }
    );
};
