import { createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import axios from 'axios'

export const addFavorite = createAsyncThunk("ADD_FAVORITE", (data) => {
    return axios.post(`http://www.localhost:3001/api/user/${data.userId}/favorite/add`, {
        tmdbId: data.movie.id,
        title: data.movie.title ? data.movie.title : data.movie.name,
        poster_path: data.movie.poster_path,
        description: data.movie.overview,
        release_date: data.movie.release_date ? data.movie.release_date : data.movie.first_air_date,
        category: data.movie.title ? "movies" : "tvshows",
    })
        .then(movie => movie.data)
        .catch((error) => console.log(error.response))
});

export const removeFavorite = createAsyncThunk("REMOVE_FAVORITE", (data) => {
    return axios.delete(
        `http://www.localhost:3001/api/user/${data.userId}/${data.movieId}/remove`)
        .then(movie => movie.data)
        .catch(error => console.log(error.response))
});

const stateFav = createReducer([], {
    [addFavorite.fulfilled]: (state, action) => action.payload,
    [removeFavorite.fulfilled]: (state, action) => action.payload
});

export default stateFav;