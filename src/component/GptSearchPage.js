import React from 'react'
import logo from '../images/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_small.jpg'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestion from './GptMoviesSuggestion'

const GptSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
      <img className="w-screen h-screen object-cover" src={logo} alt="logo" />
    </div>
    <div className="">
      <GptSearchBar />
      <GptMoviesSuggestion />
    </div>
  </>

  )
}

export default GptSearch