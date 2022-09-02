import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { userRegister } from "../../store/user";
import "./register.css"
import { registerSchema } from "../../utils/registerSchema";
import { useFormik } from "formik"

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (values, { resetForm }) => {
        dispatch(userRegister({
            username: values.username,
            email: values.email,
            password: values.password,
        }))
            .then((user) => {
                if (user.payload === "User created") {
                    toast.success('Successfully register!')
                    return navigate("/login")
                } else {
                    return navigate("/register")
                }
            })
            .catch(() => navigate("/register"))
        resetForm();
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: ""
        },
        validationSchema: registerSchema,
        onSubmit
    })

    return (
        <>
            <div className="register">

                <div className="background">
                    <div className="shape_reg"></div>
                </div>

                <form onSubmit={handleSubmit} className="form_register">
                    <h3 className="title_register">THE MOVIE CODE</h3>

                    <label
                        htmlFor="username"
                        className="label-register">
                        Username
                    </label>
                    <input
                        value={values.username}
                        onChange={handleChange}
                        id="username"
                        type="text"
                        placeholder="Username"
                        onBlur={handleBlur}
                        className={errors.username && touched.username ? "input-error" : ""}
                    />
                    {errors.username && touched.username && <p className="error">{errors.username}</p>}

                    <label
                        htmlFor="email"
                        className="label-register">
                        Email
                    </label>
                    <input
                        value={values.email}
                        onChange={handleChange}
                        id="email"
                        type="email"
                        placeholder="Email"
                        onBlur={handleBlur}
                        className={errors.email && touched.email ? "input-error" : ""}
                    />
                    {errors.email && touched.email && <p className="error">{errors.email}</p>}

                    <label
                        htmlFor="password"
                        className="label-register">
                        Password
                    </label>
                    <input
                        value={values.password}
                        onChange={handleChange}
                        id="password"
                        type="password"
                        placeholder="Password"
                        onBlur={handleBlur}
                        className={errors.password && touched.password ? "input-error" : ""}
                    />
                    {errors.password && touched.password && <p className="error">{errors.password}</p>}

                    <button type="submit" className="button_register">Register</button>

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
