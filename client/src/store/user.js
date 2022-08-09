import { createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import axios from 'axios'

export const userRegister = createAsyncThunk("USER_REGISTER", (data) => {
    return axios.post("http://localhost:3001/api/userAuth/register", data)
        .then(user => user.data)
});

export const userLogin = createAsyncThunk("USER_LOGIN", (data) => {
    return axios.post("http://localhost:3001/api/userAuth/login", data)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user.data))
            return user.data
        });
});

export const userLogout = createAsyncThunk("USER_LOGOUT", () => {
    return axios.post("http://localhost:3001/api/userAuth/logout")
        .then(user => { })
});

const userReducer = createReducer({}, {
    [userRegister.fulfilled]: (state, action) => action.payload,
    [userLogin.fulfilled]: (state, action) => action.payload,
    [userLogout.fulfilled]: (state, action) => action.payload,
});

export default userReducer;