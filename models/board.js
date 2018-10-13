module.exports = (sequelize, DataTypes) => {
    return sequelize.define('BOARD', {
        NAME: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        TITLE: {
            type: DataTypes.STRING(300),
            allowNull: false,
        },
        EMAIL: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        PWD: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        READCOUNT: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        CONTENT: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        REGDATE: {
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