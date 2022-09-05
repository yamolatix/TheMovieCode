import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

export const individualMovie = createAsyncThunk("INDIVIDUAL_MOVIE", (id) => {
    return axios.get(`http://localhost:3001/api/movies/${id}`)
        .then(movie => movie.data)
        .catch(error => console.log(error))
});

export const individualTvShow = createAsyncThunk("INDIVIDUAL_TVSHOW", (id) => {
    return axios.get(`http://localhost:3001/api/tvshows/${id}`)
        .then(movie => movie.data)
        .catch(error => console.log(error))
});

const individualReducer = createReducer([], {
    [individualMovie.fulfilled]: (state, action) => action.payload,
    [individualTvShow.fulfilled]: (state, action) => action.payload,
});

export default individualReducer;