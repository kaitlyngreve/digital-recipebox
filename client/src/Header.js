import NavBar from "./NavBar";
import { useHistory } from 'react-router-dom'

function Header({ user, setUser }) {

    const history = useHistory()

    const handleToHomepage = () => {
        history.push('/')
    }

    return (
        <div className='ultimate-header-container'>
            <div className="header-container" >
                <div className="title-container">
                    <h1 onClick={handleToHomepage} className="title">Recipy 🥕</h1>
                </div>
                <NavBar user={user} setUser={setUser} />
            </div>
        </div>
    )
}

export default Header;