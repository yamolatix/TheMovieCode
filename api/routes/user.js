const express = require("express");
const user = express.Router();
const userController = require('../controllers/user') //Llamo a la API externa.

// Ruta para mostrar los favoritos.
user.get("/:username/favorites", userController.allFavorites)

// Ruta para agregar un favorito.
user.post("/:userId/favorite/add", userController.addFavorite)

// Ruta para borrar un favorito.
user.delete("/:userId/:favoriteId/remove", userController.removeFavorite)

// Ruta para mostrar todos los usuarios.
user.get("/showUsers", userController.showUsers)

module.exports = user;