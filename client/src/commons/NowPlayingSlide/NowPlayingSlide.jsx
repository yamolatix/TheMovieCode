import React, { useEffect } from "react";
import "./now_playing_slide.css";
import { useDispatch, useSelector } from "react-redux"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings } from "../../utils/settings_now";
import { movieNowPlaying } from "../../store/now_playing";
import NowPlayingCard from "./NowPlayingCard";

const NowPlayingSlide = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(movieNowPlaying())
    }, [dispatch])

    const movies = useSelector(state => state.nowplaying);

    return (
        <div className="smooth">
            <h2 className="title_popular">Now Playing</h2>
            <Slider {...settings}>
                {movies.map((movie, i) =>
                    <div className="item" key={i}>
                        <NowPlayingCard  movie={movie} />
                    </div>
                )}
            </Slider>

        </div>

    )
}

export default NowPlayingSlide;