require('dotenv').config();

module.exports = {
  development: {
    username: process.env.SEQUELIZE_USERNAME,
    password: process.env.SEQUELIZE_PASSWORD,
    database: 'test',
    host: "mlovesm.cafe24.com",
    dialect: "mysql",
    operatorsAliases: false,
  },
  
  production: {
    username: process.env.SEQUELIZE_USERNAME,
    password: process.env.SEQUELIZE_PASSWORD,
    database: 'test',
    host: "mlovesm.cafe24.com",
    dialect: "mysql",
    operatorsAliases: false,
    logging: false,
  },
}

