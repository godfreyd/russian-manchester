module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'role',
        {
            login: {
                type: DataTypes.STRING(250),
                allowNull: false
            },
            role: {
                type: DataTypes.ENUM('user', 'admin', 'manager'),
                allowNull: false
            },
            groupId: {
                type: DataTypes.STRING(250),
                field: 'group_id'
            }
        },
        {
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            tableName: 'roles',
            indexes: [
                {
                    name: 'roles_login_role_key',
                    fields: ['login', 'role'],
                    unique: true,
                    where: {
                        'group_id': null
                    }
                }
            ]
        }
    );
};
