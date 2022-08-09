import React from "react";
import "../styles/movie_details.css"
import { Link } from "react-router-dom";

const MovieDetails = () => {
    return (
        <div className="imagen_details" style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/5M0j0B18abtBI5gi2RhfjjurTqb.jpg")`
        }}>
            <div className="initial_det">
                <h1>THE MOVIE CODE</h1>
                <div className="bottom-details">
                    <span className="back">
                        <i className='bx bx-chevron-left'></i>
                        <Link to={"/movies"} className="link"> BACK </Link>
                    </span>
                </div>

                <div className="info">
                    <div className="favorite">
                        {/* <i className='bx bx-star'></i> */}
                        <i className='bx bxs-star'></i>
                    </div>
                    <div className="movie_title">
                        <h2 className="container_titleD">
                            TERMINATOR 2: EL JUICO FINAL
                        </h2>
                    </div>
                    <div className="movie_year">
                        <h3 className="container_year">1991</h3>
                    </div>
                    <div className="description">
                        <p>
                            Nearly 10 years have passed since Sarah Connor was targeted for termination by a cyborg from the future. Now her son, John, the future leader of the resistance, is the target for a newer, more deadly terminator. Once again, the resistance has managed to send a protector back to attempt to save John and his mother Sarah.
                        </p>
                    </div>
                    <div className="category">
                        <h3 className="cate1">Movie</h3>
                        <h2 className="cate2">Accion, Suspense</h2>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MovieDetails;