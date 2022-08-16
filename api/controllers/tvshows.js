const axios = require('axios');

//Guardo en constantes los datos fuertes de la API.
const apiTMDB = 'https://api.themoviedb.org/3'
const authorization = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmFmZThjNjA0NzViZjAzMGMyMTNlM2JlMTM2YWY3NyIsInN1YiI6IjYyOTI2ODQ2MDllZDhmMTI1MzQ4YzNkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3gi6bQU-g4cwbh21G0sNnHHw16SP5hVYewjLSiHPlQg'
const apiKey = '3bafe8c60475bf030c213e3be136af77'
const contentType = 'application/json;charset=utf-8'

// Trae todas las series
exports.tvshows = (req, res) => {
    axios.get(`${apiTMDB}/discover/tv/?api_key=${apiKey}&language=en-US&sort_by=popularity.desc`, {
        headers: {
            Authorization:
                `Bearer ${authorization}`,
            "Content-Type": contentType,
        },
    })
        .then(movies => res.status(200).send(movies.data.results))
        .catch((error) => res.status(501).send(error))
};

// Trae una serie en particular
exports.tvshowsId = (req, res) => {
    const {id}= req.params;

    axios.get(`${apiTMDB}/tv/${id}?api_key=${apiKey}&language=en-US`, {
        headers: {
            Authorization:
                `Bearer ${authorization}`,
            "Content-Type": contentType,
        },
    })
        .then(movie => res.status(200).send(movie.data))
        .catch((error) => res.status(501).send(error))
}

exports.searchAll = (req, res) => {
    const { search } = req.params

    axios.get(`${apiTMDB}/search/multi?api_key=${apiKey}&language=en-US&query=$${search}&page=1&include_adult=false`, {
        headers: {
            Authorization:
                `Bearer ${authorization}`,
            "Content-Type": contentType,
        },
    })
    .then(movies => res.send(movies.data.results))
    .catch((error) => console.log(error))
}