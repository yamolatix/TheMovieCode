import React from "react";
import "./sidebar.css"
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (

        <div className="container_side">
            <div className="sidebar close">

                <div className="logo-details">
                    <i className='bx bxs-ghost'></i>

                    {/* <ul className="salute">
                        <li>Bu!</li>
                    </ul> */}

                </div>

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
                                <i class='bx bx-group'></i>
                            </Link>
                        </div>
                        <ul className="sub-menu">
                            <li>Users</li>
                        </ul>
                    </li>
                    <li>
                        <div className="icon-link">
                            <Link to={"/logout"} className="linkS">
                                <i class='bx bx-log-out-circle' ></i>
                            </Link>
                        </div>
                        <ul className="sub-menu">
                            <li>Logout</li>
                        </ul>
                    </li>
                </ul>
                {/*  <ul className="nav-links">
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
                            <Link to={"/enter"} className="linkS">
                                <i className='bx bx-user-circle'></i>
                            </Link>
                        </div>
                        <ul className="sub-menu">
                            <li>Enter</li>
                        </ul>
                    </li>
                </ul> */}
            </div>
        </div>
    );
};

export default Sidebar;

/* <i className='bx bxs-star' ></i> */


/* 
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
                <i class='bx bx-group'></i>
            </Link>
        </div>
        <ul className="sub-menu">
            <li>Users</li>
        </ul>
    </li>
    <li>
        <div className="icon-link">
            <Link to={"/logout"} className="linkS">
                <i class='bx bx-log-out-circle' ></i>
            </Link>
        </div>
        <ul className="sub-menu">
            <li>Logout</li>
        </ul>
    </li>
</ul>
 */