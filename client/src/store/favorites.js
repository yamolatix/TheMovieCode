import { createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import axios from 'axios'

export const allFavorites = createAsyncThunk("ALL_FAVORITES", (userId) => {
    return axios.get(`http://localhost:3001/api/user/${userId}/favorites`)
        .then(movie => movie.data)
        .catch(error => console.log(error))
})

export const addToFavorites = createAsyncThunk("ADD_TO_FAVORITES", (userId, data) => {
    // if (!userId) throw new Error("You need to be logged in");
    return axios.post(`http://www.localhost:3001/api/user/${userId}/favorite/add`, data)
        .then((favorite) => favorite)
        .catch(error => console.log(error))
})

export const removeFromFavorites = createAsyncThunk("REMOVE_FROM_FAVORITES", (userId, tmdbId) => {
    // if (!userId) throw new Error("You need to be logged in");
    return axios.delete(
        `http://www.localhost:3001/api/user/${userId}/${tmdbId}/remove`)
        .then((favorite) => favorite)
        .catch(error => console.log(error))
});

const favoritesReducer = createReducer([], {
    [allFavorites.fulfilled]: (state, action) => action.payload,
    [addToFavorites.fulfilled]: (state, action) => action.payload,
    [removeFromFavorites.fulfilled]: (state, action) => action.payload,
});

export default favoritesReducer;