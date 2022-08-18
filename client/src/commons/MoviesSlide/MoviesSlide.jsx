import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../../utils/settings_movies";
import { allMovies } from "../../store/movies";
import MoviesCard from "./MoviesCard";
import "./movies_slide.css";

const MoviesSlide = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allMovies())
    }, [dispatch])

    const movies = useSelector(state => state.movies)

    return (
        <div className="tv_slide">
            <h2 className="title_tvshow">Movies</h2>
            <Slider {...settings}>
                {movies.map((movie, i) =>
                    <div className="item_slidetv" key={i}>
                        <MoviesCard movie={movie} />
                    </div>
                )}
            </Slider>

        </div>

    )
}

export default MoviesSlide;