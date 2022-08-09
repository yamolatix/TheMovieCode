const Sequelize = require("sequelize");

//Creo la db bajo el nombre de 'movie_code' y la exporto.
const db = new Sequelize("movie_code", null, null, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

module.exports = db