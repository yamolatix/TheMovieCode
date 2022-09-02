import React from "react";
import { /* useDispatch, */ useSelector } from "react-redux";
import { useStorage } from "../../hooks/useStorage";
import "./add_favorite.css"
import toast from 'react-hot-toast'
// import { addFavorite } from "../../store/favorites";
import axios from "axios";

const AddFavorite = ({ setFavorite }) => {
    // const dispatch = useDispatch()
    const user = useStorage();
    const movie = useSelector(state => state.individual)

    const agregarFavoritos = () => {
        if (!user.id) throw toast.error('You need to be logged in');

        axios.post(`http://www.localhost:3001/api/user/${user.id}/favorite/add`, {
            tmdbId: movie.id,
            title: movie.title ? movie.title : movie.name,
            poster_path: movie.posuer_path,
            description: movie.overview,
            release_date: movie.release_date ? movie.release_date : movie.first_air_date,
            category: movie.title ? "movies" : "tvshows"
        })
            .catch((error) => console.log(error))
        setFavorite(true)
        toast.success('Added to my Favorites')

        /*         dispatch(addFavorite(user.id,{
            tmdbId: movie.id,
            title: movie.title ? movie.title : movie.name,
            poster_path: movie.poster_path,
            description: movie.overview,
            release_date: movie.release_date ? movie.release_date : movie.first_air_date,
            category: movie.title ? "movies" : "tvshows"
        }))
            .then(() => toast.success('Added to my Favorites'))
            .catch((error) => console.log(error))
    }; */
    };


    return (
        <div className="favorite_add" >
            <i className='bx bx-star' onClick={agregarFavoritos}></i>

            <h4>Add to favorites</h4>
        </div>
    )
}

export default AddFavorite;