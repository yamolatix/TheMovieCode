const express = require("express");
const tvshows = express.Router();
const tvShowsController = require('../controllers/tvshows') //Llamo a la API externa.

// Trae todas las series
tvshows.get('/', tvShowsController.tvshows)

// Trae una serie en particular
tvshows.get('/:id', tvShowsController.tvshowsId)

// Busca Movies y Series a la vez
tvshows.get('/search/:search', tvShowsController.searchAll)

module.exports = tvshows;