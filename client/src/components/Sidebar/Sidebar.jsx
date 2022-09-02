import React from "react";
import "./sidebar.css"
import toast from 'react-hot-toast'
import { Link, useNavigate } from "react-router-dom";
import { userLogout } from "../../store/user";
import { useDispatch } from "react-redux";
import { useStorage } from "../../hooks/useStorage";


const Sidebar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useStorage();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(userLogout())
            .then(() => {
                toast.success('Bye Bye!')
                return navigate("/")
            })
    }

    return (

        <div className="container_side">
            <div className="sidebar close">

                <div className="logo-details">
                    <i className='bx bxs-ghost'></i>
                </div>

                {user.id ? (<ul className="nav-links">
                    <li>
                        <div className="icon-link">
                            <Link to={"/"} className="linkS">
                                <i className='bx bx-home-alt-2' ></i>
                            </Link>
                        </div>
                        <ul className="sub-menu">
                            <li>Home</li>
                        </ul>
                    </li>
                    <li>
                        <div className="icon-link">
                            <Link to={"/search"} className="linkS">
                                <i className='bx bx-search' ></i>
                            </Link>
                        </div>
                        <ul className="sub-menu">
                            <li>Search</li>
                        </ul>
                    </li>
                    <li>
                        <div className="icon-link">
                            <Link to={"/favorites"} className="linkS">
                                <i className='bx bx-star'></i>
                            </Link>
                        </div>
                        <ul className="sub-menu">
                            <li>Favorites</li>
                        </ul>
                    </li>
                    <li>
                        <div className="icon-link">
                            <Link to={"/users"} className="linkS">
                                <i className='bx bx-group'></i>
                            </Link>
                        </div>
                        <ul className="sub-menu">
                            <li>Users</li>
                        </ul>
                    </li>
                    <li>
                        <div className="icon-link">
                            <Link to={"/logout"} className="linkS"  >
                                <i onClick={handleLogout} className='bx bx-log-out-circle' ></i>
                            </Link>
                        </div>
                        <ul className="sub-menu">
                            <li >Logout</li>
                        </ul>
                    </li>
                </ul>
                ) : (
                    <ul className="nav-links">
                        <li>
                            <div className="icon-link">
                                <Link to={"/"} className="linkS">
                                    <i className='bx bx-home-alt-2' ></i>
                                </Link>
                            </div>
                            <ul className="sub-menu">
                                <li>Home</li>
                            </ul>
                        </li>
                        <li>
                            <div className="icon-link">
                                <Link to={"/search"} className="linkS">
                                    <i className='bx bx-search' ></i>
                                </Link>
                            </div>
                            <ul className="sub-menu">
                                <li>Search</li>
                            </ul>
                        </li>
                        <li>
                            <div className="icon-link">
                                <Link to={"/login"} className="linkS">
                                    <i className='bx bx-user-check'></i>
                                </Link>
                            </div>
                            <ul className="sub-menu">
                                <li>Login</li>
                            </ul>
                        </li>
                        <li>
                            <div className="icon-link">
                                <Link to={"/register"} className="linkS">
                                    <i className='bx bx-user-plus' ></i>
                                </Link>
                            </div>
                            <ul className="sub-menu">
                                <li>Register</li>
                            </ul>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Sidebar;

/* <i className='bx bxs-star' ></i> */