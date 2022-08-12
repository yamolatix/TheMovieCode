import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import useInput from "../../hooks/useInput";
import { userRegister } from "../../store/user";
import "./register.css"

const Register = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const username = useInput();
    const email = useInput();
    const password = useInput();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userRegister({
            username: username.value,
            email: email.value,
            password: password.value,
        }))
            .then(() => {
                toast.success('Successfully register!')
                return navigate("/login")
            })
            .catch((error) => console.log(error))
    }

    return (
        <>
            <div className="register">

                <div className="background">
                    <div className="shape_reg"></div>
                </div>

                <form onSubmit={handleSubmit} className="form_register">
                    <h3 className="title_register">THE MOVIE CODE</h3>

                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Username" id="username" {...username} required />

                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Email" id="emain" {...email} required />

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" id="password" {...password} required />

                    <button className="button_register">Register</button>

                    {/* <div className="social">
                        <div className="go">
                            <i className='bx bxl-google'></i>
                            Google
                        </div>
                    </div> */}
                </form>

            </div>
        </>
    )
}
export default Register;
