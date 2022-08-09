const User = require('./User');
const Favorites = require('./Favorites');

//Método de asociación.
Favorites.belongsToMany(User,{ through: 'user_favorites' })
User.belongsToMany(Favorites,{ through: 'user_favorites' })

module.exports = { User, Favorites };