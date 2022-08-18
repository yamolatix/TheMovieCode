import { createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import axios from 'axios'

export const movieNowPlaying = createAsyncThunk("NOW_PLAYING_MOVIES", () => {
    return axios.get(`http://localhost:3001/api/movies/now_playing`)
    .then(movies => movies.data.results)
    .catch(error => console.log(error))
})

const nowPlayingReducer = createReducer([], {
    [movieNowPlaying.fulfilled]: (state, action) => action.payload,
});

export default nowPlayingReducer;