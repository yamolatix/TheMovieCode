import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Carrousel from "../../commons/Carrousel/Carrousel";
import MoviesSlide from "../../commons/MoviesSlide/MoviesSlide";
import NowPlayingSlide from "../../commons/NowPlayingSlide/NowPlayingSlide";
import TvShowSlide from "../../commons/TvShowsSlide/TvShowSlide";
import { showUsers } from "../../store/users";
import "./home.css"

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(showUsers())
    }, [dispatch])

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