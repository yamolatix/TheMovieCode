import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../../utils/placeholder.png";
import "./card.css"

const Card = ({ type }) => {

    const imageUrl = type.poster_path ? `https://image.tmdb.org/t/p/w500${type.poster_path}` : placeholder
    return (
        type.first_air_date ? (
            <Link to={`/tvshows/${type.id}`}>
                <li className="movie_card">
                    <img
                        className="movie_image"
                        src={imageUrl}
                        alt={type.title}
                    />
                    <div className="movie_title">{type.original_name}</div>
                </li>
            </Link>
        ) : (
            <Link to={`/movies/${type.id}`}>
                <li className="movie_card">
                    <img
                        className="movie_image"
                        src={imageUrl}
                        alt={type.title}
                    />
                    <div className="movie_title">{type.title}</div>
                </li>
            </Link>
        )
    );
};

export default Card;