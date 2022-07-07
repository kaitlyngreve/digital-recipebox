import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Welcome({ user }) {

    let history = useHistory()

    const handleTourClick = () => {
        history.push('/homepage')
    }

    return (
        <>
            <h3>HELLO {user.username}!</h3>
            <p>Welcome to Recipy, a digital recipe box for creating, sharing, and storing your favorite recipes!</p>
            <p>Here is your personal recipe tab. This is where you will find all of your recipes that you have created and liked.</p>
            <button onClick={handleTourClick}>Check out the recipes in your feed!</button>
        </>
    )
}

export default Welcome;