import { NavLink, useHistory } from 'react-router-dom'
import { useState } from 'react'

function NavBar({ user, setUser }) {

    let history = useHistory()

    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE'
        })
            .then((r) => {
                if (r.ok) {
                    setUser(null)
                    history.push('/')
                }
            })
    }

    return (
        <div>
            <nav className='nav-links'>
                <NavLink className='nav' to='/'>homepage</NavLink>
                <NavLink className='nav' to='/myrecipes'>my recipes</NavLink>
                <NavLink className='nav' to='/' onClick={handleLogout}>Logout</NavLink>
            </nav>
        </div>
    )
}

export default NavBar;