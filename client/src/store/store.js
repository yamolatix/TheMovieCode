import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import favoritesReducer from './favorites';
import individualReducer from './individual';
import moviesReducer from './movies';
import nowPlayingReducer from './now_playing';
import stateFav from './statefav';
import tvShowsReducer from './tvshows';
import userReducer from './user';
import usersReducer from './users';

const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(logger),
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        tvshows: tvShowsReducer,
        individual: individualReducer,
        nowplaying: nowPlayingReducer,
        favorites: favoritesReducer,
        users: usersReducer,
        stateFav : stateFav,
    }
});

export default store;