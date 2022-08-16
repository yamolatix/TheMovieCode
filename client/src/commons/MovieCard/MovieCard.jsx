import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../../utils/placeholder.png";
import "./movie_card.css"

const MovieCard = ({ movie }) => {

    const imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : placeholder

    return (
        <Link to={`/movie/${movie.id}`}>
            <li className="movie_card">
                <img
                    className="movie_image"
                    src={imageUrl}
                    alt={movie.title}
                />
                <div className="movie_title">{movie.title}</div>
            </li>
        </Link>

    );
};

export default MovieCard;