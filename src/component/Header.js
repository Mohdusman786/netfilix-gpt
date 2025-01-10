import React from 'react'
import logo from '../images/Netflix_Logo_PMS.png'
const Header = () => {
    return (
        <div className='absolute px-8 py-3 m-2 z-50'>
            <img
                className='w-60'
                src={logo}
                alt='logo'
            />
        </div>
    )
}

export default Header