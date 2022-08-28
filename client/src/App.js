import React from "react";
import { Route, Routes } from "react-router";
import { Toaster } from 'react-hot-toast'
import Sidebar from "./components/Sidebar/Sidebar"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home";
import Search from "./commons/Search/Search";
import Favorites from "./commons/Favorites/Favorites";
import UserList from "./commons/UsersList/UserList";
import Register from "./commons/Register/Register";
import Login from "./commons/Login/Login";
import CardDetails from "./commons/CardDetails/CardDetails";
import UserFavorites from "./commons/UserFavorites/UserFavorites";

const App = () => {

  return (
    <div>
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:category/:id" element={<CardDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search?q=:search" element={<Search />} />
        <Route path="/search/movies" element={<Search />} />
        <Route path="/search/tvshows" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/favorites/:username" element={<UserFavorites />} />
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