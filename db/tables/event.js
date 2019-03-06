module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'event',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            ts: DataTypes.FLOAT, // число секунд от 1 января 1970
            /*
                Время события, относительно которого возникло текущее событие.
                Пока бывает только у `expired` события
            */
            occurrenceTs: {
                type: DataTypes.FLOAT,
                field: 'occurrence_ts'
            },
            tesseractId: {
                type: DataTypes.STRING(250),
                field: 'tesseract_id'
            },
            operator: DataTypes.STRING(250),
            locationId: {
                type: DataTypes.STRING(250),
                field: 'location_id'
            },
            textileId: {
                type: DataTypes.STRING(250),
                field: 'textile_id'
            },
            slot: DataTypes.STRING(250),
            isLast: {
                type: DataTypes.BOOLEAN,
                field: 'is_last',
                allowNull: false,
                defaultValue: false
            },
            notified: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true
            },
            oebsStatus: {
                type: DataTypes.ENUM('none', 'pending', 'registered'),
                field: 'oebs_status',
                allowNull: false,
                defaultValue: 'registered'
            }
        },
        {
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            tableName: 'events',
            indexes: [
                {
                    name: 'idx_events_textile_id_is_last_unique',
                    fields: ['textile_id', 'is_last'],
                    unique: true,
                    where: {
                        'is_last': true
                    }
                }
            ]
        }
    );
};
