import React from 'react'
import { IMG_CDN_URL } from '../utils/constent'

const MovieCard = ({ posterPath }) => {
    return (
        <div className="w-28 md:w-36 pr-4">
            <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
        </div>
    )
}

export default MovieCard