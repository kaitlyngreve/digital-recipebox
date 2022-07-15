import { NavLink, useHistory } from 'react-router-dom'
import { useState } from 'react'

function NavBar({ user, setUser }) {

    return (
        <div>
            <nav className='nav-links'>
                <NavLink className='nav' to='/'>homepage</NavLink>
                <NavLink className='nav' to='/myrecipes'>my recipes</NavLink>
                <NavLink className='nav' to='/profile'>profile</NavLink>
            </nav>
        </div>
    )
}

export default NavBar;