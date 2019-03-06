module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'textile',
        {
            id: {
                type: DataTypes.STRING(250),
                allowNull: false,
                primaryKey: true
            },
            goodId: {
                type: DataTypes.STRING(250),
                field: 'good_id',
                defaultValue: 'default-good'
            },
            category: DataTypes.STRING(250),
            inventory: DataTypes.STRING(250),
            material: DataTypes.STRING(250),
            brand: DataTypes.STRING(250),
            note: DataTypes.TEXT,
            cityOfShipment: {
                type: DataTypes.STRING(250),
                field: 'city_of_shipment',
                defaultValue: 'Иваново',
                allowNull: false
            },
            regionOfShipment: {
                type: DataTypes.STRING(250),
                field: 'region_of_shipment',
                defaultValue: 'Ивановская область',
                allowNull: false
            },
            latOfShipment: {
                type: DataTypes.FLOAT,
                field: 'latitude_of_shipment',
                defaultValue: 56.99719,
                allowNull: false
            },
            lonOfShipment: {
                type: DataTypes.FLOAT,
                field: 'longitude_of_shipment',
                defaultValue: 40.97139,
                allowNull: false
            },
            discount: DataTypes.INTEGER,
            status: DataTypes.STRING(250),
            search: DataTypes.VIRTUAL
        },
        {
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            tableName: 'textiles'
        }
    );
};
