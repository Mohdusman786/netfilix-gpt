import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addTrendingMovies } from "../utils/moviesSlice"
import { API_OPTIONAS } from "../utils/constent"


const useTrendingMovies = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        getTrendingMovies()
    }, [])

    const getTrendingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/week?page=1', API_OPTIONAS)
        const json = await data.json()
        dispatch(addTrendingMovies(json.results))
    }

}

export default useTrendingMovies