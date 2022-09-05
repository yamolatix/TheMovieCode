import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Grid from "../../components/Grid/Grid";
import { useStorage } from "../../hooks/useStorage";
import { allFavorites } from "../../store/favorites";
import "./favorites.css"

const Favorites = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useStorage();
    const favorites = useSelector((state) => state.favorites)

    useEffect(() => {
        dispatch(allFavorites(user.username))
    }, [favorites])

    return (
        <div className="initial_fav">
            <h1 className="movie_code">THE MOVIE CODE</h1>
            <div className="back_fav">
                <i className='bx bx-chevron-left'></i>
                <h3 onClick={() => navigate(-1)} className="back_buttomF"> BACK</h3>
            </div>

            <h2 className="title_fav">My Favorites</h2>

            <div className="favorites_container">
                {favorites.length === 0 ? (
                    <h2 className="not_favs">You don't have favorites yet.</h2>
                ) : (
                    <Grid types={favorites} category={favorites.category === "movies" ? "movies" : "tvshows"} />
                )}
            </div>
        </div>
    )
};

export default Favorites;