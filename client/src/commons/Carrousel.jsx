import React from "react";
import "../styles/carrousel.css"
import { Link } from "react-router-dom";

const Carrousel = () => {
    return (
        <div className="imagen_carrousel" style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/xKb6mtdfI5Qsggc44Hr9CCUDvaj.jpg")`
        }}>
            <div className="initial_carrousel">
                <h1 className="movie_code">THE MOVIE CODE</h1>
                <div className="bottom-carrousel">
                    <span className="categories">
                        <Link to={"/movies"} className="link_cat">Movies</Link>
                        <Link to={"/tvshows"} className="link_cat">TV Shows</Link>
                    </span>
                </div>

                <div className="info">
                    <div className="movie_title">
                        <h2 className="container_title">
                            <Link to={"/movie/id"} className="link_tit">TERMINATOR 2: EL JUICO FINAL </Link>
                        </h2>
                    </div>
                    <div className="description">
                        <p className="container_description">
                            Nearly 10 years have passed since Sarah Connor was targeted for termination by a cyborg from the future. Now her son, John, the future leader of the resistance, is the target for a newer, more deadly terminator. Once again, the resistance has managed to send a protector back to attempt to save John and his mother Sarah.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carrousel;