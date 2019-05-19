module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'sub_category',
        {
            id: {
                type: DataTypes.STRING(250),
                allowNull: false,
                primaryKey: true
            },
            categoryId: {
                type: DataTypes.STRING(250),
                allowNull: false,
                unique: 'sub_category',
                field: 'category_id'
            },
            name: {
                type: DataTypes.STRING(250),
                allowNull: false,
                unique: 'sub_category'
            }
        },
        {
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            tableName: 'sub_categories'
        }
    );
};
