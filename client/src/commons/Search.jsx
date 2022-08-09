import React from "react";
import "../styles/search.css"

const Search = () => {
    return (

        <div className="initial_search">

            <h1>THE MOVIE CODE</h1>

            <div className="input_search">

                <form className="form">
                    <input type="text" name="search" placeholder="Search.." />
                </form>
            </div>


        </div>
    );
};

export default Search;