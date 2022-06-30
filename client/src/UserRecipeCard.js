import { useState } from 'react'
import { Link } from 'react-router-dom'


function UserRecipeCard({ userRecipe }) {


    return (
        <div className='recipe-card-container'>
            <p>{userRecipe.title}</p>
            <Link to={`/recipes/${userRecipe.id}`}>
                <img className='recipe-img' src={userRecipe.img_url} />
            </Link>
            <p>{userRecipe.description}</p>
        </div>
    )
}

export default UserRecipeCard;