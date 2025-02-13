import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTopRatedMovies } from "../utils/moviesSlice"
import { API_OPTIONAS } from "../utils/constent"


const useTopRatedMovies = () => {
    const dispatch = useDispatch()
    const topRatedMovies = useSelector(store => store.movies.topRatedMovies)

    useEffect(() => {
        !topRatedMovies && getTopRatedMovies()
    }, [])

    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONAS)
        const json = await data.json()
        dispatch(addTopRatedMovies(json.results))
    }

}

export default useTopRatedMovies