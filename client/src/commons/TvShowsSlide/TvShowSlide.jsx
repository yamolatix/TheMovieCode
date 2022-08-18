import React, { useEffect } from "react";
import "./tvshow_slide.css";
import { useDispatch, useSelector } from "react-redux"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings } from "../../utils/settings_tvshow";
import { allTvShows } from "../../store/tvshows";
import TvShowCard from "./TvShowCard";

const TvShowSlide = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allTvShows())
    }, [dispatch])

    const tvshows = useSelector(state => state.tvshows);

    return (
        <div className="tv_slide">
            <h2 className="title_tvshow">TV Shows</h2>
            <Slider {...settings}>
                {tvshows.map((tvshow, i) =>
                    <div className="item_slidetv" key={i}>
                        <TvShowCard  tvshow={tvshow} />
                    </div>
                )}
            </Slider>

        </div>

    )
}

export default TvShowSlide;