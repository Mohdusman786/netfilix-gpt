import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useTrendingMovies from '../hooks/useTrendingMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import GptSearchPage from './GptSearchPage'
import Header from './Header'
import MainContainer from './MainContainer'
import SeconderyContainer from './SeconderyContainer'

const Browes = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  useNowPlayingMovies()
  usePopularMovies()
  useUpcomingMovies()
  useTopRatedMovies()
  useTrendingMovies()

  return (
    <div>
      <Header />
      {
        showGptSearch ? <GptSearchPage /> :
          <>
            <MainContainer />
            <SeconderyContainer />
          </>
      }
    </div>
  )
}

export default Browes