import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "../../components/Grid/Grid";
import { useStorage } from "../../hooks/useStorage";
import { allFavorites } from "../../store/favorites";
import "./favorites.css"

const Favorites = () => {

    const dispatch = useDispatch();
    const user = useStorage();
    const favorites = useSelector((state) => state.favorites)

    useEffect(() => {
        dispatch(allFavorites(user.id))
    }, [dispatch])

    return (
        <div className="initial_fav">
            <h1 className="movie_code">THE MOVIE CODE</h1>

            <h2 className="title_fav">My Favorites</h2>

            <div className="favorites_container">

                <Grid types={favorites} category={favorites.category === "movies" ? "movies" : "tvshows"} />

            </div>

        </div>
    )
};

export default Favorites;