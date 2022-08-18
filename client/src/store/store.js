import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import individualReducer from './individual';
import moviesReducer from './movies';
import nowPlayingReducer from './now_playing';
import tvShowsReducer from './tvshows';
import userReducer from './user';

const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger),
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        tvshows: tvShowsReducer,
        individual: individualReducer,
        nowplaying: nowPlayingReducer,
    }
});

export default store;