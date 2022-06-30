import { useState } from 'react'


function UserRecipeCard({ userRecipe }) {


    return (
        <div className='recipe-card-container'>
            <p>{userRecipe.title}</p>
            <img className='recipe-img' src={userRecipe.img_url} />
            <p>{userRecipe.description}</p>
        </div>
    )
}

export default UserRecipeCard;