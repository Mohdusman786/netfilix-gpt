import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addPopularMovies } from "../utils/moviesSlice"
import { API_OPTIONAS } from "../utils/constent"


const usePopularMovies = () => {
    const dispatch = useDispatch()
    const popularMovies = useSelector(store => store.movies.popularMovies)

    useEffect(() => {
        !popularMovies && getPopularMovies()
    }, [])

    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONAS)
        const json = await data.json()
        dispatch(addPopularMovies(json.results))
    }

}

export default usePopularMovies