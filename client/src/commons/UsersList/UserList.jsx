import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useStorage } from "../../hooks/useStorage";
import "./user_list.css"


const UserList = () => {
    const users = useSelector((state) => state.users);
    const user = useStorage();


    return (
        <div className="initial_users">
            <h1 className="movie_code">THE MOVIE CODE</h1>

            <h2 className="title_users">Users</h2>

            <div className="users_container">

                {users.map((data, i) =>
                (
                    <div  key={i}>
                        <Link to="/">
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