import React, { useEffect, useState } from "react";
import "./movie_details.css"
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import placeholder from "../../utils/placeholder.png"
import { individualMovie } from "../../store/individual";
import toast from 'react-hot-toast'
import { addToFavorites, allFavorites, removeFromFavorites } from "../../store/favorites";
import { useStorage } from "../../hooks/useStorage";

const MovieDetails = () => {
    const movie = useSelector(state => state.individual)
    const user = useStorage();
    const { id } = useParams();
    const [favorite, SetFavorite] = useState(false);
    const dispatch = useDispatch();

    const imageUrl = movie.backdrop_path ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : placeholder

    useEffect(() => {
        dispatch(individualMovie(id))
        dispatch(allFavorites(user.id))
    }, [id])

    const agregarFavoritos = () => {
        dispatch(addToFavorites(user.id, {
            tmdbId: id,
            title: movie.title,
            poster_path: movie.poster_path,
            description: movie.overview,
            release_date: movie.release_date,
        }))

        SetFavorite(true);
        console.log("**STATE FAVORITE EN AGREGAR FAV**", favorite)
        toast.success('Added to Favorites!')
    };

    const eliminarFavoritos = () => {
        dispatch(removeFromFavorites(user.id, id))

        SetFavorite(false);
        console.log("**STATE FAVORITE EN ELIMINAR FAV**", favorite)
        toast.success('Removed to Favorites!')
    };

    return (

        <div className="imagen_details" style={{
            backgroundImage: `url(${imageUrl})`
        }}>
            <div className="initial_det">
                <h1>THE MOVIE CODE</h1>
                <div className="bottom-details">
                    <span className="back">
                        <i className='bx bx-chevron-left'></i>
                        <Link to={"/search"} className="link"> BACK </Link>
                    </span>
                </div>

                <div className="info">

                    {favorite ? (
                        <div className="favorite" >
                            <i className='bx bxs-star' onClick={eliminarFavoritos} ></i>
                        </div>
                    ) : (

                        <div className="favorite" >
                            <i className='bx bx-star' onClick={agregarFavoritos}></i>
                        </div>
                    )}
                    <div className="movie_title">
                        <h2 className="container_titleD">
                            {movie.title}
                        </h2>
                    </div>
                    <div className="movie_year">
                        <h3 className="container_year">{movie.tagline}</h3>
                    </div>
                    <div className="description">
                        <p>
                            {movie.overview}
                        </p>
                    </div>
                    <div className="category">
                        <h3 className="cate1">Movie</h3>
                        <h2 className="cate2">{movie.release_date}</h2>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MovieDetails;