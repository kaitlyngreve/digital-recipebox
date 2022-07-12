import Login from './Login'
import Signup from './Signup'
import { useState } from 'react'


function LandingPage({ user, setIsAuthenticated, setUser, isAuthenticated }) {
    // const [isLogin, setIsLogin] = useState("")

    if (!isAuthenticated) return <Login error={'please log in'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />

    function handleUpdateUser(user) {
        setUser(user)
    }

    // function handleAlreadyUser() {
    //     setIsLogin("true")
    // }

    return (
        <div className='user-recipe-card-container'>
            <Login setUser={setUser} handleUpdateUser={handleUpdateUser} user={user} setIsAuthenticated={setIsAuthenticated} />
            <Signup setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
        </div>
    )
}

export default LandingPage;