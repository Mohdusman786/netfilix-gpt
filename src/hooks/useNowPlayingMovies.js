import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addNowPlayingMovies } from "../utils/moviesSlice"
import { API_OPTIONAS } from "../utils/constent"


const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)

    useEffect(() => {
        if(!nowPlayingMovies) getNowPlayingMovies()
    }, [])

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONAS)
        const json = await data.json()
        dispatch(addNowPlayingMovies(json.results))
    }

}

export default useNowPlayingMovies