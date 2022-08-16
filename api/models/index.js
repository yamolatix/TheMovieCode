const User = require('./User');
const Favorites = require('./Favorites');

//Método de asociación.
Favorites.belongsToMany(User, { through: 'user_favorites', timestamps: false })
User.belongsToMany(Favorites, { through: 'user_favorites', timestamps: false })

module.exports = { User, Favorites };