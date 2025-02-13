import React, { useRef, useState } from 'react'
import Header from './Header'
import { LOGO_URL } from '../utils/constent';
import logo from '../images/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_small.jpg';
import { checkVelidateData } from '../utils/velidation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase'
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null) 
    const dispatch = useDispatch()

    const hendleButtonSubmit = (e) => {
        const message = checkVelidateData(email.current.value, password.current.value)
        setErrorMessage(message)
        if (message) return;

        if (!isSignInForm) {
            // Sign up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: LOGO_URL
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                    }).catch((error) => {
                        setErrorMessage(error.message)
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                    // ..
                });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
        }
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div className='relative w-full h-screen overflow-hidden'>
            <Header />
            {/* Background Image */}
            <div className='absolute top-0 left-0 w-full h-full -z-10'>
                <img src={logo} alt='logo' className='w-screen h-screen object-cover' />
            </div>
    
            {/* Form Container */}
            <div className='flex justify-center items-center h-full'>
                <form 
                    onSubmit={(e) => e.preventDefault()} 
                    className='w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'
                >
                    <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                    {!isSignInForm && (
                        <input 
                            ref={name} 
                            type='text' 
                            placeholder='Full Name' 
                            className='p-3 my-2 bg-gray-600 bg-opacity-60 rounded w-full' 
                        />
                    )}
                    <input 
                        ref={email} 
                        type='text' 
                        placeholder='Enter Your Email' 
                        className='p-3 my-2 bg-gray-600 bg-opacity-60 rounded w-full' 
                    />
                    <input 
                        ref={password} 
                        type='password' 
                        placeholder='Enter Password' 
                        className='p-3 my-2 bg-gray-600 bg-opacity-60 rounded w-full' 
                    />
                    <p className='text-red-600'>{errorMessage}</p>
                    <button 
                        className='w-full p-2 my-2 bg-red-700 rounded' 
                        onClick={hendleButtonSubmit}
                    >
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>
                    <p 
                        className='py-4 cursor-pointer' 
                        onClick={toggleSignInForm}
                    >
                        {isSignInForm ? "New to Netflix? Sign up now." : "Already Registered? Sign In now."}
                    </p>
                </form>
            </div>
        </div>
    );
    
}

export default Login