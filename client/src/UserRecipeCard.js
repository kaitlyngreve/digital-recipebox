import { Link } from 'react-router-dom'


function UserRecipeCard({ userRecipe, handleDeleteUserRecipe }) {

    const handleDelete = () => {
        fetch(`/recipes/${userRecipe.id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(handleDeleteUserRecipe(userRecipe));
    }

    return (
        <div className='user-recipe-card-container'>
            <p>{userRecipe.title}</p>
            <Link to={`/recipes/${userRecipe.id}`}>
                <img className='recipe-img' src={userRecipe.img_url} />
            </Link>
            <button className='recipe-page-button' onClick={handleDelete}>remove recipe</button>
        </div>
    )
}

export default UserRecipeCard;