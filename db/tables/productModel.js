module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'product_model',
        {
            id: {
                type: DataTypes.STRING(250),
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING(250),
                allowNull: false
            },
            material: DataTypes.STRING(250),
            updatedAt: {
                type: DataTypes.DATEONLY,
                field: 'updated_at'
            },
            width: DataTypes.INTEGER,
            height: DataTypes.INTEGER,
            video: DataTypes.STRING(250),
            description: DataTypes.TEXT,
            photo: DataTypes.STRING(250)
        },
        {
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            tableName: 'product_models'
        }
    );
};
