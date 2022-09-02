import { createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import axios from 'axios'

export const allFavorites = createAsyncThunk("ALL_FAVORITES", (username) => {
    return axios.get(`http://localhost:3001/api/user/${username}/favorites`)
        .then(movie => movie.data)
        .catch(error => console.log(error))
});

/* export const addFavorite = createAsyncThunk("ADD_FAVORITE", (userId, tmdbId, title, poster_path, description, release_date, category) => {
    return axios.post(`http://www.localhost:3001/api/user/favorite/add?userId=${userId}`, {
        tmdbId: tmdbId,
        title: title,
        poster_path: poster_path,
        description: description,
        release_date: release_date,
        category: category,
    })
        .then(movie => movie.data)
        .catch((error) => console.log(error.response))
});

export const removeFavorite = createAsyncThunk("REMOVE_FAVORITE", (userId, movieId) => {
    return axios.delete(
        `http://www.localhost:3001/api/user/${userId}/${movieId}/remove`)
        .then(movie => movie.data)
        .catch(error => console.log(error.response))
}); */

const favoritesReducer = createReducer([], {
    [allFavorites.fulfilled]: (state, action) => action.payload,
/*     [addFavorite.fulfilled]: (state, action) => action.payload,
    [removeFavorite.fulfilled]: (state, action) => {
        state.favorites = state.favorites.filter(
            (fav) => fav.id !== action.payload.id);
    }, */
});

export default favoritesReducer;