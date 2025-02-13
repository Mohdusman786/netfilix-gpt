import React, { useRef } from 'react'
import client from '../utils/openai'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONAS } from '../utils/constent'
import { addGptMovieResult } from '../utils/gptSlice'

const GptSearchBar = () => {
    const dispatch = useDispatch()
    const langKey = useSelector(store => store.config.lang)
    const searchText = useRef(null)

    // Fetch Movies

    const searchhMovieTMDB = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONAS)
        const json = await data.json()
        return json.results;
    }

    const hendleGptSearchText = async () => {
        console.log(searchText.current.value);

        const gptQuery = "Acct is a Movies Recommendation system as suggest same movie for the query :" +
            searchText.current.value +
            ". only give me name 5 movies, comma seperated like the example given ahead. Example Result: Don, Pathan, KGF, Tiger, Dhamal "

        const gptResult = await client.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        console.log(gptResult.choices[0]?.message?.content);

        if (!gptResult.choices) {
            // TODO: Write Error hendling
        }
        const gptMovies = gptResult.choices[0]?.message?.content.split(",")
        const promiseArray = gptMovies.map(movie => searchhMovieTMDB(movie))
        const tmdbResults = await Promise.all(promiseArray);
        console.log(tmdbResults);

        dispatch(
            addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
          );
    }

    return (
        <div className='pt-[40%] md:pt-[10%] flex justify-center'>
            <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
                <input ref={searchText} className='col-span-9 p-3 m-3' type='text' placeholder={lang[langKey].gptSearchPlaceholder} />
                <button className='col-span-3 m-3 py-2 px-3 bg-red-700 text-white rounded-lg ' onClick={hendleGptSearchText}>{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar