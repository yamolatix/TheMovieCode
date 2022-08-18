import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router'
import Grid from "../../components/Grid/Grid";
import { allMovies } from "../../store/movies";
import { allTvShows, searchAll } from "../../store/tvshows";
import "./search.css"

const Search = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [search, setSearch] = useState('')
    const [active, setActive] = useState("FirstCard")

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchAll(search));
        navigate(`/search/${search}`)
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
                        <button type="submit" className="input_sub"
                            onClick={() => setActive("ThirdCard")}>
                            <i className='bx bx-search'></i>
                        </button>
                    </form>
                </div>

                <div className="cat_search">

                    <button onClick={() => setActive("FirstCard")} className="btn cat_but1">Movies</button>

                    <button onClick={() => setActive("SecondCard")} className="btn cat_but2">Tv Shows</button>

                </div>
            </div>

            {active === "FirstCard" ?
                <Grid types={movies} />
                :
                <Grid types={tvshows} />
            }
        </>
    );
};

export default Search;