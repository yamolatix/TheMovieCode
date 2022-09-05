import { createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import axios from 'axios'

export const allFavorites = createAsyncThunk("ALL_FAVORITES", (username) => {
    return axios.get(`http://localhost:3001/api/user/${username}/favorites`)
        .then(movie => movie.data)
        .catch(error => console.log(error))
});

const favoritesReducer = createReducer([], {
    [allFavorites.fulfilled]: (state, action) => action.payload,
});

export default favoritesReducer;