import React from 'react'
import logo from '../images/Netflix_Logo_PMS.png'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
    const navigate = useNavigate()
    const user = useSelector((store)=>store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
            navigate("/error")
        });
    }
    return (
        <div className='flex justify-between w-screen absolute px-6 py-1 z-50 border'>
            <div>
                <img
                    className='w-52 '
                    src={logo}
                    alt='logo'
                />
            </div>
            {user && <div className='my-auto flex'>
                <img 
                    className='w-12'
                    alt='profileicon' 
                    src={user.photoURL}
                />
                <button onClick={handleSignOut} className=' underline px-4 font-bold'>Sign Out</button>
            </div>}
        </div>
    )
}

export default Header