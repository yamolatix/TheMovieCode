import React from "react";
import "./tvshow_card.css"
import placeholder from "../../utils/placeholder.png";
import { Link } from "react-router-dom";


const TvShowCard = ({ tvshow }) => {

    const imageUrl = tvshow.poster_path ? `https://image.tmdb.org/t/p/w500${tvshow.poster_path}` : placeholder

    return (
        <Link to={`/search/tvshows/${tvshow.id}`}>
            <img
                className="tvslide_card"
                src={imageUrl}
                alt={tvshow.original_name}
            />
        </Link>
    )
};

export default TvShowCard;