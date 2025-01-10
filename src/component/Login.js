import React, { useState } from 'react'
import Header from './Header'
import logo from '../images/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_small.jpg';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src={logo} alt='logo' />
            </div>
            <form className='absolute text-white bg-black w-3/12 my-40 mx-auto right-0 left-0 p-8 m-8 bg-opacity-80 rounded-lg'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type='text' placeholder='Full Name' className='p-3 my-2 bg-gray-600 bg-opacity-60 rounded w-full' />}
                {!isSignInForm && <input type='number' placeholder='Phone Number' className='p-3 my-2 bg-gray-600 bg-opacity-60 rounded w-full' />}
                <input type='text' placeholder='Enter Your Email' className='p-3 my-2 bg-gray-600 bg-opacity-60 rounded w-full' />
                <input type='password' placeholder='Enter Password' className='p-3 my-2 bg-gray-600 bg-opacity-60 rounded w-full' />
                <button className=' w-full p-2 my-2 bg-red-700 rounded'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now." : "Allredy Resistor? Sign In now."}</p>
            </form>
        </div>  
    )
}

export default Login