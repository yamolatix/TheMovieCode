import React from "react";
import "./popular_card.css"
import placeholder from "../../utils/placeholder.png";
import { Link } from "react-router-dom";


const PopularCard = ({ movie }) => {

    const imageUrl = movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : placeholder

    return (
        <Link to={`/movies/${movie.id}`}>
            <img
                className="popular_card"
                src={imageUrl}
                alt={movie.title}
            />
            <div className="heading">{movie.title}</div>

        </Link>
    )
};

export default PopularCard;