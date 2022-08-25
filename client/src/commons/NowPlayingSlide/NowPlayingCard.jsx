import React from "react";
import "./now_playing_card.css"
import placeholder from "../../utils/placeholder.png";
import { Link } from "react-router-dom";


const NowPlayingCard = ({ movie }) => {

    const imageUrl = movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : placeholder

    return (
        <Link to={`/search/movies/${movie.id}`}>
            <img
                className="popular_card"
                src={imageUrl}
                alt={movie.title}
            />
            <div className="heading">{movie.title}</div>

        </Link>
    )
};

export default NowPlayingCard;