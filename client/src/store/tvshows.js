import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

export const allTvShows = createAsyncThunk("ALL_TVSHOWS", () => {
    return axios.get("http://localhost:3001/api/tvshows")
        .then(user => user.data)
        .catch(error => console.log(error))
});

export const searchAll = createAsyncThunk("SEARCH_All", (search) => {
    return axios.get(`http://localhost:3001/api/tvshows/search/${search}`)
        .then(movies => movies.data)
        .catch(error => console.log(error))
});

const tvShowsReducer = createReducer([], {
    [allTvShows.fulfilled]: (state, action) => action.payload,
    [searchAll.fulfilled]: (state, action) => action.payload,
});

export default tvShowsReducer;