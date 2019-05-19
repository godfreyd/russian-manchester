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
            material: DataTypes.STRING(250),
            price: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                allowNull: false
            },
            inventory: DataTypes.STRING(250),
            brand: DataTypes.STRING(250),
            note: DataTypes.TEXT,
            discount: {
                type: DataTypes.INTEGER,
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
