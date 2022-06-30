import { useState } from 'react'
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
        <div className='recipe-card-container'>
            <p>{userRecipe.title}</p>
            <Link to={`/recipes/${userRecipe.id}`}>
                <img className='recipe-img' src={userRecipe.img_url} />
            </Link>
            <p>{userRecipe.description}</p>
            <button onClick={handleDelete}> X </button>
        </div>
    )
}

export default UserRecipeCard;