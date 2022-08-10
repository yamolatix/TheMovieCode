import React from "react";
import "./search.css"

const Search = () => {
    return (

        <div className="initial_search">

            <h1>THE MOVIE CODE</h1>

            <div className="container_form">
                <form className="form">
                    <input className="input_search" type="text" name="search" placeholder="Search movies or tv shows"  />
                    <button type="submit" className="input_sub" >
                        <i className='bx bx-search'></i>
                    </button>
                </form>
            </div>

            <div className="cat_search">
                <button className="btn cat_but1">Movies</button>
                <button className="btn cat_but2">Tv Shows</button>
            </div>
        </div >
    );
};

export default Search;