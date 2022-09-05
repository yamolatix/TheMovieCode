const axios = require('axios');

//Guardo en constantes los datos fuertes de la API.
const apiTMDB = 'https://api.themoviedb.org/3';
const authorization = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmFmZThjNjA0NzViZjAzMGMyMTNlM2JlMTM2YWY3NyIsInN1YiI6IjYyOTI2ODQ2MDllZDhmMTI1MzQ4YzNkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3gi6bQU-g4cwbh21G0sNnHHw16SP5hVYewjLSiHPlQg';
const apiKey = '3bafe8c60475bf030c213e3be136af77';
const contentType = 'application/json;charset=utf-8';

//Requiero y llamo a la API con axios al ser una DB externa y lo exporto a mis rutas.

//Llamado a todas las movies.
exports.movies = (req, res) => {
    axios.get(`${apiTMDB}/discover/movie/?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1`, {
        
        headers: {
            Authorization:
                `Bearer ${authorization}`,
            "Content-Type": contentType,
        },
    })
        .then(movies => res.status(200).send(movies.data.results))
        .catch((error) => res.status(501).send(error))
};

//Llamado a una movie en particular a través de su id.
exports.movieId = (req, res) => {
    const { id } = req.params;

    axios.get(`${apiTMDB}/movie/${id}?api_key=${apiKey}&language=en-US`, {
        headers: {
            Authorization:
                `Bearer ${authorization}`,
            "Content-Type": contentType,
        },
    })
        .then(movie => res.status(200).send(movie.data))
        .catch((error) => res.status(501).send(error))
};

// Llamado a las movies en cartelera
exports.movieNowPlaying = (req, res) => {
    axios.get(`${apiTMDB}/movie/now_playing/?api_key=${apiKey}&language=en-US`, {
        headers: {
            Authorization:
                `Bearer ${authorization}`,
            "Content-Type": contentType,
        },
    })
        .then(movie => res.status(200).send(movie.data))
        .catch((error) => res.status(501).send(error))
};

//Llamado al buscador de movies.
exports.movieSearch = (req, res) => {
    const { search } = req.params
    axios.get(`${apiTMDB}/search/movie?api_key=${apiKey}&query=$${search}`, {
        headers: {
            Authorization:
                `Bearer ${authorization}`,
            "Content-Type": contentType,
        },
    })
    .then(movies => res.send(movies.data.results))
    .catch((error) => console.log(error))
};