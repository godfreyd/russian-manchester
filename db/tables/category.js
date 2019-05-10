module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'category',
        {
            id: {
                type: DataTypes.STRING(250),
                allowNull: false,
                primaryKey: true
            },
            name: DataTypes.STRING(250),
            description: DataTypes.TEXT,
            fqdn: {
                type: DataTypes.STRING(250),
                allowNull: false,
                unique: true
            },
            link: DataTypes.STRING(250),
        },
        {
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            tableName: 'categories'
        }
    );
};
