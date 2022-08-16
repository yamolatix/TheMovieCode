const Sequelize = require('sequelize');
const db = require('../config/db');

// Modelo para los favoritos de los usuarios.

class Favorites extends Sequelize.Model { }

Favorites.init({
    tmdbId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    poster_path: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.TEXT,
    },
    release_date: {
        type: Sequelize.STRING,
    },
    genres: {
        type: Sequelize.STRING,
    }
},

    { timestamps: false, sequelize: db, modelName: 'favorites' });

module.exports = Favorites;