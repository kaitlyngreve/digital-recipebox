import { useHistory } from 'react-router-dom'

function Welcome({ user }) {

    let history = useHistory()

    const handleTourClick = () => {
        history.push('/')
    }

    return (
        <div className='welcome-container'>
            <h3 className='welcome-header'>HELLO {user.username}!</h3>
            <p className='welcome-p'>🥕 Welcome to Recipy, a digital recipe box for creating, sharing, and storing your favorite recipes!</p>
            <p className='welcome-p'>🥕 Here is your personal recipe tab. This is where you will find all of your recipes that you have created.</p>
            <p className='welcome-p'>🥕 After creating a recipe, you can click on it to view your full ingredient list and directions. You can also update your recipe after it's been created.</p>
            <p className='welcome-p'>🥕 Click on the '+' to get started!</p>
            <h4 className='welcome-p-or'>- OR -</h4>
            <button className='form-button' onClick={handleTourClick}>Check out the recipes in your feed!</button>
        </div>
    )
}

export default Welcome;