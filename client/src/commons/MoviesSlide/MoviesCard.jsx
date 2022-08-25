import React from "react";
import "./movies_slide.css"
import placeholder from "../../utils/placeholder.png";
import { Link } from "react-router-dom";


const MoviesCard = ({ movie }) => {

    const imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : placeholder

    return (
        <Link to={`/search/movies/${movie.id}`}>
            <img
                className="tvslide_card"
                src={imageUrl}
                alt={movie.original_name}
            />
        </Link>
    )
};

export default MoviesCard;