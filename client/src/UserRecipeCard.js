import { Link } from 'react-router-dom'


function UserRecipeCard({ userRecipe, handleDeleteUserRecipe }) {

    const handleDelete = () => {
        fetch(`/recipes/${userRecipe.id}`, {
            method: 'DELETE'
        })
            .then(handleDeleteUserRecipe(userRecipe));
    }

    return (
        <div className='user-recipe-card-container card'>
            <Link to={`/recipes/${userRecipe.id}`}>
                <img className='recipe-img' src={userRecipe.img_url} />
            </Link>
            <p>{userRecipe.title}</p>
            <button className='recipe-page-button button' onClick={handleDelete}>remove recipe</button>
        </div>
    )
}

export default UserRecipeCard;