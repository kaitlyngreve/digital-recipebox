import { SettingsSuggestRounded } from '@mui/icons-material';
import { NavLink, useHistory } from 'react-router-dom'

function NavBar({ user, setUser }) {
    let history = useHistory()

    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE'
        })
            .then((r) => {
                if (r.ok) {
                    setUser(null)
                }
            })
        history.push('/login')
        console.log(user)
    }

    return (
        <div>
            <nav className='nav-links'>
                <NavLink className='nav' to='/homepage'>homepage</NavLink>
                <NavLink className='nav' to='/myrecipes'>{user.username}'s recipes</NavLink>
                <NavLink className='nav' to='/login' onClick={handleLogout}>Logout</NavLink>
            </nav>
        </div>
    )
}

export default NavBar;