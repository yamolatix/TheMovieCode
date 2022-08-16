import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allMovies } from "../../store/movies";
import { allTvShows, searchAll } from "../../store/tvshows";
import MovieCard from "../MovieCard/MovieCard";
import TvShowCard from "../TvShowCard/TvShowCard";
import "./search.css"

const Search = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchAll(search))
    }

    useEffect(() => {
        dispatch(allMovies())
        dispatch(allTvShows())
    }, [dispatch])

    const movies = useSelector(state => state.movies)
    const tvshows = useSelector(state => state.tvshows)

    return (
        <>
            <div className="initial_search">

                <h1>THE MOVIE CODE</h1>

                <div className="container_form">
                    <form className="form" onSubmit={handleSubmit}>
                        <input onChange={handleSearch} className="input_search" type="text" name="search" placeholder="Search movies or tv shows" />
                        <button type="submit" className="input_sub" >
                            <i className='bx bx-search'></i>
                        </button>
                    </form>
                </div>

                <div className="cat_search">
                    <button className="btn cat_but1">Movies</button>
                    <button className="btn cat_but2">Tv Shows</button>
                </div>
            </div>

            {/*             <ul className="movies_grid">
                {movies.map((movie, i) => (
                    <MovieCard key={i} movie={movie} />
                ))}
            </ul> */}

            <ul className="template_grid">
                {tvshows.map((tvshow, i) => (
                    <TvShowCard key={i} tvshow={tvshow} />
                ))}
            </ul>
        </>
    );
};

export default Search;