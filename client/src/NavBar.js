import { NavLink } from 'react-router-dom'

function NavBar() {

    return (
        <div>
            <nav>
                <NavLink className='nav' to='/homepage'>homepage</NavLink>
                <NavLink className='nav' to='/recipes'>see my recipes</NavLink>
            </nav>
        </div>
    )
}

export default NavBar;