import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import useInput from "../../hooks/useInput";
import { userRegister } from "../../store/user";
import "./register.css"
import { registerSchema } from "../../utils/registerSchema";
import { useFormik } from "formik"


const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const username = useInput();
    const email = useInput();
    const password = useInput();
    ///PUEDO DISPATCHEAR ELQ EU MUESTRA TODOS LOS USUARIOS Y COMPARARLO PARA VER SI YA EXISTE!!!
    // EN CASO DE ESTAR REGISTRADO SE LE PONE UN CARTEL EN LA CARA Y LE DICE QUE YA ESTA REGISTARADO.
    // A VER QUE SALEEEE
    const registerSubmit = (e) => {
        e.preventDefault();

        if ([username.value, password.value, email.value].includes("")) {
            return toast.error("You should fill in the fields correctly")
        }

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


    const { values, handleBlur, handleChange, errors, touched } = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: ""
        },
        validationSchema: registerSchema,
    })
    return (
        <>
            <div className="register">

                <div className="background">
                    <div className="shape_reg"></div>
                </div>


                <form onSubmit={registerSubmit} className="form_register">
                    <h3 className="title_register">THE MOVIE CODE</h3>

                    <label htmlFor="username">Username</label>
                    <input
                        value={values.username}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="text"
                        placeholder="Username"
                        id="username"
                        {...username}
                        className={errors.username && touched.username ? "input-error" : ""}
                    />
                    {errors.username && touched.username && <p className="error">{errors.username}</p>}

                    <label htmlFor="email">Email</label>
                    <input
                        value={values.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="email"
                        placeholder="Email"
                        id="email"
                        {...email}
                        className={errors.email && touched.email ? "input-error" : ""}
                    />
                    {errors.email && touched.email && <p className="error">{errors.email}</p>}

                    <label htmlFor="password">Password</label>
                    <input
                        value={values.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="password"
                        placeholder="Password"
                        id="password"
                        {...password}
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
