import React from "react";
import Carrousel from "../../commons/Carrousel/Carrousel";
import PopularSlide from "../../commons/PopularSlide/PopularSlide";
import "./home.css"

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