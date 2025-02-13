import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUpcomingMovies } from "../utils/moviesSlice"
import { API_OPTIONAS } from "../utils/constent"


const useUpcomingMovies = () => {
    const dispatch = useDispatch()
    const upcomingMovies = useSelector(store => store.movies.upcomingMovies)

    useEffect(() => {
        !upcomingMovies && getUpcomingMovies()
    }, [])

    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONAS)
        const json = await data.json()
        dispatch(addUpcomingMovies(json.results))
    }

}

export default useUpcomingMovies