import { createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import axios from 'axios'

export const allMovies = createAsyncThunk("ALL_MOVIES", () => {
    return axios.get("http://localhost:3001/api/movies/")
        .then(user => user.data)
        .catch(error => console.log(error))
});

export const individualMovie = createAsyncThunk("INDIVIDUAL_MOVIE", ({ id }) => {
    return axios.get(`http://localhost:3001/api/movies/${id}`)
        .then(movie => movie.data)
        .catch(error => console.log(error))
})

export const searchMovies = createAsyncThunk("SEARCH_MOVIE", ({ search }) => {
    return axios.get(`http://localhost:3001/api/movies/search/${search}`)
        .then(movies => movies.data)
        .catch(error => console.log(error))
})

export const popularMovies = createAsyncThunk("POPULAR_MOVIES", () => {
    return axios.get(`http://localhost:3001/api/movies/popular/`)
        .then(movies => movies.data)
        .catch(error => console.log(error))
})

const movieReducer = createReducer([], {
    [allMovies.fulfilled]: (state, action) => action.payload,
    [individualMovie.fulfilled]: (state, action) => action.payload,
    [searchMovies.fulfilled]: (state, action) => action.payload,
    [popularMovies.fulfilled]: (state, action) => action.payload,
});

export default movieReducer;