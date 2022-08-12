import React from "react";
import toast from 'react-hot-toast'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import { userLogin } from "../../store/user";
import "./login.css"

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const username = useInput();
    const password = useInput();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userLogin({
            username: username.value,
            password: password.value,
        }))
            .then(() => {
                toast.success('Welcome!')
                return navigate("/")
            })
            .catch((error) => console.log(error))
    }

    return (
        <div className="initial_login">

            <div className="background">
                <div className="shape"></div>
            </div>

            <form className="form_login" onSubmit={handleSubmit} >
                <h3 className="title_login">THE MOVIE CODE</h3>

                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Username" id="username" {...username} required />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" {...password} required />

                <button className="button_login">Login</button>

                {/*                 <div className="social">
                    <div className="go">
                        <i className='bx bxl-google'></i>
                        Google
                    </div>
                </div> */}
            </form>

        </div>
    )
}
export default Login;