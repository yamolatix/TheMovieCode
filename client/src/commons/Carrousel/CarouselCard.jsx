import React from "react";
import "./carousel_card.css"
import placeholder from "../../utils/placeholder.png";
import { Link } from "react-router-dom";

const CarouselCard = ({ movie }) => {

    const imageUrl = movie.backdrop_path ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : placeholder

    return (
        <>
            <div className="data_carousel">
                <h1 className="car_movie">
                    THE MOVIE CODE
                </h1>
                <div className="bottom-carrousel">
                    <span className="categories">
                        <Link to={"/search/movies"} className="link_cat">Movies</Link>
                        <Link to={"/search/tvshows"} className="link_cat">TV Shows</Link>
                    </span>
                </div>
            </div>


            <div className="card_caro">
                <div className="imagen_carrousel" style={{
                    backgroundImage: `url("${imageUrl}")`
                }} />
                <div className="info_caro">
                    <div className="movie_title">
                        <h2 className="container_title">
                            <Link className="link_tit" to={`/search/movies/${movie.id}`}>{movie.title}</Link>
                        </h2>
                    </div>
                    <div className="description">
                        <p className="container_description">
                            {movie.overview}
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
};

export default CarouselCard;