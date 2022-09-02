import React from "react";
import toast from 'react-hot-toast';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../store/user";
import { loginSchema } from "../../utils/loginSchema";
import "./login.css";
import { useFormik } from "formik";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (values, { resetForm }) => {

        dispatch(userLogin({
            username: values.username,
            password: values.password,
        }))
            .then((user) => {
                if (user.payload.username) {
                    toast.success(`Welcome ${user.payload.username}!`)
                    return navigate("/")
                }
            })
            .catch((error) => error);

        resetForm();
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: loginSchema,
        onSubmit,
    });

    return (
        <div className="initial_login">

            <div className="background">
                <div className="shape"></div>
            </div>

            <form className="form_login" onSubmit={handleSubmit} >
                <h3 className="title_login">THE MOVIE CODE</h3>

                <label
                    htmlFor="username"
                    className="label-login">
                    Username
                </label>
                <input
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Username"
                    id="username"
                    className={errors.password && touched.password ? "input_login" : ""}
                />
                {errors.username && touched.username && <p className="error_login">{errors.username}</p>}

                <label
                    htmlFor="password" className="label-login">
                    Password
                </label>
                <input
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="password"
                    placeholder="Password"
                    id="password"
                    className={errors.password && touched.password ? "input_login" : ""}
                />
                {errors.password && touched.password && <p
                    className="error_login">{errors.password}</p>}

                <button type="submit" className="button_login">Login</button>

                {/*                 <div className="social">
                    <div className="go">
                        <i className='bx bxl-google'></i>
                        Google
                    </div>
                </div> */}
            </form>

        </div>
    );
};
export default Login;