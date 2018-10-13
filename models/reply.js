module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Reply', {
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        },
        pwd: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        groupNo: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        delFlag: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        regdate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('now()'),
        },
    }, {
            timestamps: true,
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
};