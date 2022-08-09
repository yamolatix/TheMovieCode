const express = require("express");
const router = express.Router();

const moviesRoutes = require("./movies")
const tvShowsRoutes = require("./tvshows")
const userAuthRoutes = require("./userAuth")
const userRoutes = require("./user")

router.use("/movies", moviesRoutes);
router.use("/tvshows", tvShowsRoutes);
router.use("/userAuth", userAuthRoutes);
router.use("/user", userRoutes);

module.exports = router;