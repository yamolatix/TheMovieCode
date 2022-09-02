import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Grid from "../../components/Grid/Grid";
import { allFavorites } from "../../store/favorites";
import "./user_favorites.css"

const UserFavorites = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { username } = useParams();
    const favorites = useSelector((state) => state.favorites)

    useEffect(() => {
        dispatch(allFavorites(username))
    }, [username])

    return (
        <div className="initial_fav">
            <h1 className="movie_code">THE MOVIE CODE</h1>

            <div className="back_Ufav">
                <i className='bx bx-chevron-left'></i>
                <h3 onClick={() => navigate(-1)} className="back_buttomUF"> BACK</h3>
            </div>

            <h2 className="title_fav_us">{`${username}'s Favorites`}</h2>

            <div className="favorites_container">

            {favorites.length === 0 ? (
                    <h2 className="not_favs">{`${username} don't have favorites yet.`} </h2>
                ) : (
                    <Grid types={favorites} category={favorites.category === "movies" ? "movies" : "tvshows"} />
                )}                

            </div>

        </div>
    )
};

export default UserFavorites;