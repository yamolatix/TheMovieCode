import "./carrousel.css"
// import { useSelector } from "react-redux";
import React from "react";
// import placeholder from "../../utils/placeholder.png";
import { Link } from "react-router-dom";

const Carrousel = () => {

    // const movies = useSelector(state => state.movies)
    // const movie = movies.slice(1, 2);
    // const imageUrl = movie.backdrop_path ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : placeholder
 
    return (

        <div className="imagen_carrousel" style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/vvObT0eIWGlArLQx3K5wZ0uT812.jpg")`
        }}>
            <div className="initial_carrousel">
                <h1 className="movie_code">THE MOVIE CODE</h1>
                <div className="bottom-carrousel">
                    <span className="categories">
                        <Link to={"/search"} className="link_cat">Movies</Link>
                        <Link to={"/search"} className="link_cat">TV Shows</Link>
                    </span>
                </div>

                <div className="info">
                    <div className="movie_title">
                        <h2 className="container_title">
                            <Link to={"/movies/id"} className="link_tit">Thor: Love and Thunder </Link>
                        </h2>
                    </div>
                    <div className="description">
                        <p className="container_description">
                        The one is not the only.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carrousel;