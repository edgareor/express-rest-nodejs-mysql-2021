const { Sequelize } = require('sequelize');

const db = new Sequelize('test', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true
});

module.exports = { db }