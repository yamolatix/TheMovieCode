const Favorites = require("../models/Favorites");
const User = require("../models/User");

exports.allFavorites = (req, res) => {
    const { username } = req.params;

    User.findOne({
        where: { username: username },
        include: [{ model: Favorites }]
    })
        .then(user => res.send(user.favorites))
        .catch((error) => res.status(500).json(error));
};

exports.addFavorite = (req, res) => {
    const { tmdbId, title, poster_path, description, release_date, category } = req.body
    const { userId } = req.params

    User.findByPk(userId)
        .then(user => {
            Favorites.findOrCreate({
                where: {
                    tmdbId: tmdbId,
                    title: title,
                    poster_path: poster_path,
                    description: description,
                    release_date: release_date,
                    category: category
                }
            })
                .then(([newfavorite]) => {
                    newfavorite.addUser(user.id)
                })
                .then(() => res.status(201).send("Se ha agregado con éxito a tu lista de favoritos."))
                .catch((error) => res.status(500).json(error));
        })
};

exports.removeFavorite = (req, res) => {
    const { userId, favoriteId } = req.params
    Favorites.destroy({
        where: {
            tmdbId: favoriteId,
        },
        include: [{ model: User, attributes: { id: userId } }]
    })
        .then(() => res.status(200).json("Se ha eliminado con éxito"))
        .catch((error) => res.status(500).json(error))
};

exports.showUsers = (req, res) => {

    User.findAll({
        attributes: {
            exclude: ['password', 'createdAt', 'updatedAt']
        },
    })
        .then((user) => res.json(user))
        .catch((error) => res.status(500).json(error));
};