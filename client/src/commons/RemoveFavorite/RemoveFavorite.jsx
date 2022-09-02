import React from "react";
import toast from 'react-hot-toast'
import { /* useDispatch, */ useSelector } from "react-redux";
import { useStorage } from "../../hooks/useStorage";
// import { removeFavorite } from "../../store/favorites";
import "./remove_favorite.css"
import axios from "axios";

const RemoveFavorite = ({ setFavorite }) => {
    // const dispatch = useDispatch()
    const user = useStorage();
    // const userId = user.id
    const movie = useSelector(state => state.individual)
    // const movieId = movie.id

    const eliminarFavoritos = () => {
        if (!user.id) throw toast.error('You need to be logged in');

        /*         dispatch(removeFavorite({ userId, movieId }))
                    .then(() => toast.success('Removed to my Favorites'))
                    .catch(error => console.log(error.response))
            }; */
        axios.delete(
            `http://www.localhost:3001/api/user/${user.id}/${movie.id}/remove`)
            .then(() => { })
            .catch(error => console.log(error))
        setFavorite(false)

        toast.success('Removed to my Favorites')
    };

    return (
        <div className="favorite_remove" >
            <i className='bx bxs-star' onClick={eliminarFavoritos}></i>
            <h4>Remove from favorites</h4>
        </div>
    )
}


export default RemoveFavorite;