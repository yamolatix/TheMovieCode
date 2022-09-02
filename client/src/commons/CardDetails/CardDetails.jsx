import React, { useEffect, useState } from "react";
import "./card_details.css"
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import placeholder from "../../utils/placeholder.png"
import { individualMovie, individualTvShow } from "../../store/individual";
import axios from "axios";
import toast from 'react-hot-toast'
import { useStorage } from "../../hooks/useStorage";

const CardDetails = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    // El category que recibe por params queda del anterior y no hace el cambio cuando viene desde los favoritos. A chequear!
    const { /* category, */ id } = useParams();
    const user = useStorage();
    const movie = useSelector(state => state.individual)
    const [favorite, setFavorite] = useState(false)

    const imageUrl = movie.backdrop_path ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : placeholder

    useEffect(() => {
        /*  if (category === "movies") { */
        dispatch(individualMovie(id))
        /*  } else { */
        dispatch(individualTvShow(id))
        /*   } */
    }, [id])

    const agregarFavoritos = () => {
        if (!user.id) throw toast.error('You need to be logged in');

        axios.post(`http://www.localhost:3001/api/user/${user.id}/favorite/add`, {
            tmdbId: movie.id,
            title: movie.title ? movie.title : movie.name,
            poster_path: movie.poster_path,
            description: movie.overview,
            release_date: movie.release_date ? movie.release_date : movie.first_air_date,
            category: movie.title ? "movies" : "tvshows"
        })
            .catch((error) => console.log(error))
        setFavorite(true)
        toast.success('Added to my Favorites')
    };

    const eliminarFavoritos = () => {
        if (!user.id) throw toast.error('You need to be logged in');
        axios.delete(
            `http://www.localhost:3001/api/user/${user.id}/${movie.id}/remove`)
            .then(() => { })
            .catch(error => console.log(error))
        setFavorite(false)

        toast.success('Removed to my Favorites')
    };

    return (
        <div className="imagen_details" style={{
            backgroundImage: `url(${imageUrl})`
        }}>
            <div className="initial_det">
                <h1>THE MOVIE CODE</h1>

                <div className="back">
                    <i className='bx bx-chevron-left'></i>
                    <h3 onClick={() => navigate(-1)} className="back_buttom"> BACK</h3>
                </div>

                <div className="info">
                    {favorite ? (
                        <div className="favorite" >
                            <i className='bx bxs-star' onClick={eliminarFavoritos}></i>

                            <h4>Remove from favorites</h4>
                        </div>
                    ) : (
                        <div className="favorite" >
                            <i className='bx bx-star' onClick={agregarFavoritos}></i>
                            <h4>Add to favorites</h4>
                        </div>

                    )}
                    <div className="movie_title">
                        <h2 className="container_titleD">
                            {movie.title ? movie.title : movie.name}
                        </h2>
                    </div>
                    <div className="movie_tag">
                        <h3 className="container_tag">
                            {movie.tagline ?
                                movie.tagline : movie.type}
                        </h3>
                    </div>
                    <div className="description">
                        <p>
                            {movie.overview}
                        </p>
                    </div>
                    <div className="category">
                        <h3 className="cate1"> {movie.title ? "Movie" : "TV Show"}</h3>
                        <h2 className="cate2">{movie.release_date ? movie.release_date : movie.first_air_date}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;