import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router'
import { Link } from "react-router-dom";
import Grid from "../../components/Grid/Grid";
import { searchAll } from "../../store/tvshows";
import "./search.css"

const Search = () => {

    // TIENE PINTA QUE ES PARA BUSCAR MAS RAPIDO Y MEJOR
    // https://www.youtube.com/watch?v=1eO_hNYzaSc&ab_channel=MattTheDev
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const tvshows = useSelector(state => state.tvshows)
    const movies = useSelector(state => state.movies)

    const [search, setSearch] = useState('')
    const [active, setActive] = useState("FirstCard")

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchAll(search));
        navigate(`/search?q=${search}`)
    };

    return (
        <>
            <div className="initial_search">

                <h1 className="movie_code">THE MOVIE CODE</h1>
                <div className="back_ser">
                    <i className='bx bx-chevron-left'></i>
                    <h3 onClick={() => navigate(-1)} className="back_buttom"> BACK</h3>
                </div>

                <div className="container_form">
                    <form className="form" onSubmit={handleSubmit}>
                        <input
                            onChange={handleSearch}
                            value={search}
                            className="input_search"
                            type="text"
                            name="search"
                            placeholder="Search movies or tv shows"
                        />
                        <button
                            type="submit"
                            className="input_sub"
                            onClick={() => {
                                setActive("ThirdCard")
                            }}
                        >
                            <i className='bx bx-search'></i>
                        </button>
                    </form>
                </div>

                <div className="cat_search">

                    <Link to={"/search/movies"} onClick={() => setActive("FirstCard")} className="btn cat_but1">Movies</Link>

                    <Link to={"/search/tvshows"} onClick={() => setActive("SecondCard")} className="btn cat_but2">Tv Shows</Link>

                </div>
            </div>

            {active === "FirstCard" ?
                <Link to={"/search/movies"}><Grid types={movies} category={"movies"} /></Link>
                :
                <Link to={"/search/tvshows"}><Grid types={tvshows} category={"tvshows"} /></Link>
            }
        </>
    );
};

export default Search;