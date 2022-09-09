// Express para las rutas.
const express = require("express");

//Requiero el .env
require("dotenv").config();

// Middelwares.
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const volleyball = require("volleyball");

// Importo db y rutas.
const db = require("./config/db");
const routes = require("./routes");

//importo models por primera y unica vez.
const models = require('./models')

const app = express();

//parsing middleware.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(volleyball);

// routes
app.use("/api", routes);

// middleware error
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

// sync + listen port

const PORT = process.env.PORT || 3001;

db.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch(console.error);