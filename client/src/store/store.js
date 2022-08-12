import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import movieReducer from './movies';
import userReducer from './user';

const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger),
    reducer: {
        user: userReducer,
        movies: movieReducer,
    }
});

export default store;