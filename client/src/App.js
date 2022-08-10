import React from "react";
import { Route, Routes } from "react-router";
import Sidebar from "./components/Sidebar/Sidebar"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home";
import MovieDetails from "./commons/MovieDetails/MovieDetails";
import Search from "./commons/Search/Search";
import Enter from "./commons/Enter/Enter";

const App = () => {
  return (
    <div>
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/id" element={<MovieDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/enter" element={<Enter />} />

        {/* <Route path="/movies" element={<MoviesGrid />} /> */}
        {/* <Route path="/tvshows" element={<TvShows />} /> */}
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
