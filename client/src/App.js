import React from "react";
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from "react-router";
import Sidebar from "./components/Sidebar/Sidebar"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home";
import MovieDetails from "./commons/MovieDetails/MovieDetails";
import Search from "./commons/Search/Search";
import Favorites from "./commons/Favorites/Favorites";
import UserList from "./commons/UsersList/UserList";
import Register from "./commons/Register/Register";
import Login from "./commons/Login/Login";
import TvShowDetails from "./commons/TvShowDetails/TvShowDetails";

const App = () => {
  return (
    <div>
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/tvshow/:id" element={<TvShowDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/users" element={<UserList />} />

        {/* ESTOS DOS IRIAN A UNA MISMA RUTA PERO DEPENDIENDO DE SU PATH???????? */}
        <Route path="/search/movies" element={<Search />} /> 
        <Route path="/search/tvshows" element={<Search />} />
      </Routes>

      <Footer />
      <Toaster
        style={{
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        }
        }
        position="top-right"
        toastOptions={{
          duration: 1500,
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          }
        }} />
    </div>
  );
};

export default App;
