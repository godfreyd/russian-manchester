module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'textile_good',
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
            category: DataTypes.STRING(250),
            material: DataTypes.STRING(250),
            brand: DataTypes.STRING(250),
            width: DataTypes.INTEGER,
            height: DataTypes.INTEGER,
            video: DataTypes.STRING(250),
            description: DataTypes.TEXT,
            photo: DataTypes.STRING(250),
            price: DataTypes.INTEGER
        },
        {
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            tableName: 'textile_goods'
        }
    );
};
