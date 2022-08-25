import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../../utils/placeholder.png";
import "./card.css"

const Card = ({ type, category }) => {

    const imageUrl = type.poster_path ? `https://image.tmdb.org/t/p/w500${type.poster_path}` : placeholder
    return (

        <Link to={`/search/${category}/${type.tmdbId ? type.tmdbId : type.id}`}>
            <li className="movie_card">
                <img
                    className="movie_image"
                    src={imageUrl}
                    alt={type.title}
                />
                <div className="movie_title"> {type.title ? type.title : type.name} </div>
            </li>
        </Link>
    );
};

export default Card;