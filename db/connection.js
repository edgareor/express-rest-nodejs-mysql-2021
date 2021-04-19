const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.BD, process.env.USER, process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    logging: true
});

module.exports = { db }