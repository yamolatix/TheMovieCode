const express = require("express");
const movies = express.Router();
const movieController = require('../controllers/movies') //Llamo a la API externa.

// La ubico en la ruta y comiezan los pedidos a través del controller.

//Ruta a todas las movies.
movies.get('/', movieController.movies)

//Ruta a cada movie individual.
movies.get('/:id', movieController.movieId)

//Ruta para un search
movies.get('/search/:search', movieController.movieSearch)

//Ruta para traer las películas más populares.
movies.get('/now_playing', movieController.movieNowPlaying)

module.exports = movies;