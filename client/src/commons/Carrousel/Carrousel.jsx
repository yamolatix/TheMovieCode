import React from "react";
import "./carrousel.css"
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../../utils/settings_carousel";
import CarouselCard from "./CarouselCard";

const Carrousel = () => {

    const movies = useSelector(state => state.movies)
    const carrouselMovies = movies.slice(7, 10);

    return (


        <div className="carrousel">
            <Slider {...settings}>
                {carrouselMovies.map((movie, i) =>
                    <div key={i}>
                        <CarouselCard movie={movie} />
                    </div>
                )}
            </Slider>
        </div>



    );
};

export default Carrousel;