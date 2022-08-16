const Sequelize = require('sequelize');
const db = require('../config/db');
const Favorite = require('./Favorites')

// Modelo para los Users que se registren.
class User extends Sequelize.Model { }

User.init({
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isAlpha: {
                msg: "El username solo puede contener letras"
            },
            len: {
                args: [4, 25],
                msg: 'El username tiene que tener 4 caracteres como mínimo y 10 como máximo.'
            }
        },
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        len: {
            args: [3, 10],
            msg: 'La contraseña tiene que tener 3 caracteres como mínimo y 10 como máximo.'
        }
    }
},
    { timestamps: false, sequelize: db, modelName: 'users' }
);

module.exports = User;