import React, { useEffect } from 'react'
import logo from '../images/Netflix_Logo_PMS.png'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGE } from '../utils/constent';
import { changeLanguage } from '../utils/configSlice'
const Header = () => {
    const showGptSearch = useSelector(store => store.gpt.showGptSearch)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((store) => store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => { })
            .catch((error) => {
                navigate("/error")
            });
    }

    const handleGptSearchBar = () => {
        // Toggle
        dispatch(toggleGptSearchView())
    }

    const hendaleLanguage = (e) => {
        dispatch(changeLanguage(e.target.value))
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                navigate("/browes")
            } else {
                dispatch(removeUser())
                navigate("/")
            }
        });
    }, [])

    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
            <div>
                <img
                    className='w-44 mx-auto md:mx-0'
                    src={logo}
                    alt='logo'
                />
            </div>
            {user && <div className='flex md:p-2 justify-between'>
                {showGptSearch && <select className='text-[12px] md:text-[15px] m-2 p-2 bg-gray-700 text-white rounded-md' onChange={hendaleLanguage}>
                    {SUPPORTED_LANGUAGE.map(lang => <option key={lang.identifire} value={lang.identifire}>{lang.name}</option>)}
                </select>}
                <button onClick={handleGptSearchBar} className='bg-purple-800 text-white text-[12px] md:text-[15px] m-2 p-2 px-4 rounded'>{showGptSearch ? "Home Page" : "GPT Search"}</button>
                <img
                    className='hidden md:block w-12 h-12'
                    alt='profileicon'
                    src={user.photoURL}
                />
                <button onClick={handleSignOut} className=' underline px-2 text-white font-bold'>Sign Out</button>
            </div>}
        </div>
    )
}

export default Header