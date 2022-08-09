const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
require("dotenv").config();

exports.register = (req, res) => {

    const SECRET = process.env.SECRET
    const password = bcrypt.hashSync(req.body.password, 10)

    User.create({
        username: req.body.username,
        email: req.body.email,
        password: password
    })
        .then((user) => {

            const token = jwt.sign({ user: user }, SECRET)
            res.json({
                username: user.username,
                email: user.email,
                token: token
            })
        })
        .catch(err => {
            res.status(500).json(err)
        })
};

exports.login = (req, res) => {
    const { username, password } = req.body;
    const SECRET = process.env.SECRET

    User.findOne({
        where: {
            username: username
        }
    })
        .then(user => {
            if (!user) {
                res.status(404).json({ msg: "Usuario no encontrado" })
            } else {
                if (bcrypt.compareSync(password, user.password)) {

                    const token = jwt.sign({ user: user }, SECRET)
                    res.json({
                        username: user.username,
                        email: user.email,
                        token: token
                    })

                } else {
                    res.status(401).json({ msg: "Contraseña incorrecta" })
                }
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })

};

exports.logout = (req, res) => {
    const token = undefined
    res.status(200).json("Logout");
};