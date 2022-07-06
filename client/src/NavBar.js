import { SettingsSuggestRounded } from '@mui/icons-material';
import { NavLink, useHistory } from 'react-router-dom'
import { useState } from 'react'

function NavBar({ user, setUser, recipes }) {
    const [isClicked, setIsClicked] = useState(false)
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

    const handleClicked = () => {
        setIsClicked(isClicked => !isClicked)
    }


    return (
        <div>
            <nav className='nav-links'>
                <NavLink onClick={handleClicked} className={isClicked ? 'nav-clicked' : 'nav'} to='/homepage'>homepage</NavLink>
                <NavLink onClick={handleClicked} className={isClicked ? 'nav-clicked' : 'nav'} to='/myrecipes'>my recipes</NavLink>
                <NavLink className='nav' to='/login' onClick={handleLogout}>Logout</NavLink>
            </nav>
        </div>
    )
}

export default NavBar;
// const [isBlank, setIsBlank] = useState(true)

// const handleDisplay = () => {
//     if (user.recipes == [])
//         setIsBlank(isBlank)
//     else {
//         setIsBlank(!isBlank)
//     }
// }