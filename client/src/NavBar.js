import { NavLink } from 'react-router-dom'

function NavBar({ user }) {

    return (
        <div>
            <nav>
                <NavLink className='nav' to='/homepage'>homepage</NavLink>
                <NavLink className='nav' to='/myrecipes'>{user.username}'s recipes</NavLink>
            </nav>
        </div>
    )
}

export default NavBar;