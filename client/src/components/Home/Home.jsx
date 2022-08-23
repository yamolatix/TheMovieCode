import React from "react";
import Carrousel from "../../commons/Carrousel/Carrousel";
import MoviesSlide from "../../commons/MoviesSlide/MoviesSlide";
import NowPlayingSlide from "../../commons/NowPlayingSlide/NowPlayingSlide";
import TvShowSlide from "../../commons/TvShowsSlide/TvShowSlide";
import "./home.css"

const Home = () => {

    return (
        <div className="body">
            <Carrousel />
            <NowPlayingSlide />
            <TvShowSlide />
            <MoviesSlide />
        </div>
    )
}

export default Home;