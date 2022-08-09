import React from "react";
import "../styles/home.css"
import Carrousel from "../commons/Carrousel";
import PopularSlide from "../commons/PopularSlide";

const Home = () => {
    return (
        <div className="body">
            <Carrousel />
            <PopularSlide />
        </div>
    )
}

export default Home;

/* 
Componente Carrusel
Componente Popular Este solo mustra un slide de las peliculas, no más
Componente Movies
Componente Tv Shows 
 */