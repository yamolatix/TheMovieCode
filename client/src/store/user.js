import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const userRegister = createAsyncThunk("USER_REGISTER", (data) => {
    return axios.post("http://localhost:3001/api/userAuth/register", data)
        .then(user => user.data)
        .catch(error => {
            if (error.response.data.original.constraint === "users_username_key") {
                return toast.error("Username already exists")
            } else if (error.response.data.original.constraint === "users_email_key") {
                return toast.error("Email already exists");
            } else {
                return toast("Sorry, we are working to fix the error.");
            }
        });
});

export const userLogin = createAsyncThunk("USER_LOGIN", (data) => {
    return axios.post("http://localhost:3001/api/userAuth/login", data)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user.data))
            return user.data;
        })
        .catch(error => {
            if (error.response.data) {
                return toast.error(error.response.data);
            } else {
                return toast("Sorry, we are working to fix the error.");
            }
        })
});

export const userLogout = createAsyncThunk("USER_LOGOUT", () => {
    return axios.post("http://localhost:3001/api/userAuth/logout")
        .then(() => {
            localStorage.removeItem("user")
        })
        .catch(error => console.log(error));
});

const userReducer = createReducer([], {
    [userRegister.fulfilled]: (state, action) => action.payload,
    [userLogin.fulfilled]: (state, action) => action.payload,
    [userLogout.fulfilled]: (state, action) => action.payload,
});

export default userReducer;