import { createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import axios from 'axios'

export const showUsers = createAsyncThunk("SHOW_USERS", () => {
    return axios.get(`http://localhost:3001/api/user/showUsers`)
        .then(users => users.data)
        .catch(error => console.log(error))
});

const usersReducer = createReducer([], {
    [showUsers.fulfilled]: (state, action) => action.payload,
});

export default usersReducer;