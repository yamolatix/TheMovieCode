import React, { useEffect } from "react";
import "./tv_show_details.css"
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import placeholder from "../../utils/placeholder.png"
import { individualTvShow } from "../../store/individual";

const TvShowDetails = () => {
    const tvshow = useSelector(state => state.individual)
    const { id } = useParams();
    const dispatch = useDispatch();

    const imageUrl = tvshow.backdrop_path ? `https://image.tmdb.org/t/p/original${tvshow.backdrop_path}` : placeholder

    useEffect(() => {
        dispatch(individualTvShow(id))
    }, [id])

    return (

        <div className="imagen_details" style={{
            backgroundImage: `url(${imageUrl})`
        }}>
            <div className="initial_det">
                <h1>THE MOVIE CODE</h1>
                <div className="bottom-details">
                    <span className="back">
                        <i className='bx bx-chevron-left'></i>
                        <Link to={"/search"} className="link"> BACK </Link>
                    </span>
                </div>

                <div className="info">
                    <div className="favorite">
                        {/* <i className='bx bx-star'></i> */}
                        <i className='bx bxs-star'></i>
                    </div>
                    <div className="tv_title">
                        <h2 className="container_titleTV">
                            {tvshow.name}
                        </h2>
                    </div>
                    <div className="tv_year">
                        <h3 className="container_yearTV">{ 
                        tvshow.tagline ? 
                        tvshow.tagline : tvshow.type}</h3>
                    </div>
                    <div className="description">
                        <p>
                            {tvshow.overview}
                        </p>
                    </div>
                    <div className="category">
                        <h3 className="cate1">TV SHOW</h3>
                        <h2 className="cate2">{tvshow.first_air_date}</h2>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TvShowDetails;