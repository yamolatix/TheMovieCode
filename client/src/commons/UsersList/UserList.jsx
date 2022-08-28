import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useStorage } from "../../hooks/useStorage";
import "./user_list.css"


const UserList = () => {
    const navigate = useNavigate();
    const user = useStorage();
    const users = useSelector((state) => state.users);

    return (
        <div className="initial_users">
            <h1 className="movie_code">THE MOVIE CODE</h1>

            <div className="back_list">
                <i className='bx bx-chevron-left'></i>
                <h3 onClick={() => navigate(-1)} className="back_buttomL"> BACK</h3>
            </div>

            <h2 className="title_users">Users</h2>

            <div className="users_container">

                {users.map((data, i) =>
                (
                    <div key={i}>
                        <Link to={`/favorites/${data.username}`}>
                            <div className="user_list"> {data.username === user.username ? "" : data.username}</div>
                        </Link>
                    </div>
                )

                )}
            </div>
        </div>
    )
};

export default UserList;