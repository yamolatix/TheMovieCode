import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./movie_card.css"

const MovieCard = () => {
    const movies = useSelector((state) => state.movies);

    return (
        <Link to={`/movies/${movies.id}`}>
            <li className="movie_card">
                <img
                    className="movie_image"
                    src={`https://image.tmdb.org/t/p/w300/${movies.poster_path}`}
                    alt={movies.title}
                />
                <div>{movies.title}</div>
            </li>
        </Link>
    )
}
export default MovieCard;