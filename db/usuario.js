const { DataTypes } = require('sequelize');
const { db } = require('./connection');

const Usuario = db.define('Usuario', {
    nombre: {
        type: DataTypes.STRING,
    },
    correo: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.TINYINT
    }
});

module.exports = { Usuario }