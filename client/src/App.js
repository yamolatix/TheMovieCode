import React from "react";
import { Route, Routes } from "react-router";
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"
import Home from "./components/Home";
import MovieDetails from "./commons/MovieDetails";
import Search from "./commons/Search";

const App = () => {
  return (
    <div>
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/id" element={<MovieDetails />} />
        <Route path="/search" element={<Search />} />

        {/* <Route path="/movies" element={<MoviesGrid />} /> */}
        {/* <Route path="/tvshows" element={<TvShows />} /> */}
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
