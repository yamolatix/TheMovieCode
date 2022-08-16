import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../../utils/placeholder.png";
import "./tv_show_card.css"

const TvShowCard = ({ tvshow }) => {

    const imageUrl = tvshow.poster_path ? `https://image.tmdb.org/t/p/w500${tvshow.poster_path}` : placeholder

    return (
        <Link to={`/tvshow/${tvshow.id}`}>
            <li className="movie_card">
                <img
                    className="movie_image"
                    src={imageUrl}
                    alt={tvshow.title}
                />
                <div className="movie_title">{tvshow.title}</div>
            </li>
        </Link>

    );
};

export default TvShowCard;