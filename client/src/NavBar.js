import { SettingsSuggestRounded } from '@mui/icons-material';
import { NavLink, useHistory } from 'react-router-dom'
import { useState } from 'react'

function NavBar({ user, setUser, recipes }) {
    const [isClicked, setIsClicked] = useState(false)
    const [isBlank, setIsBlank] = useState(false)

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

    const handleDisplayInfo = () => {
        if (user.recipes !== [])
            setIsBlank(false)
        else {
            setIsBlank(isBlank => !isBlank)
        }
    }


    return (
        <div>
            <nav className='nav-links'>
                <NavLink className='nav' to='/homepage'>homepage</NavLink>
                <NavLink className='nav' to='/myrecipes'>my recipes</NavLink>
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