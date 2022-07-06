import UserRecipeForm from "./UserRecipeForm";
import UserRecipeCard from "./UserRecipeCard";
import { useState, useEffect } from 'react'

function UserRecipes({ recipes, user, handleNewUserRecipe, handleDeleteUserRecipe, cuisines }) {


    const userRecipes = recipes.filter(recipe => recipe.user_id === user.id)

    return (
        <div>
            <UserRecipeForm handleNewUserRecipe={handleNewUserRecipe} user={user} cuisines={cuisines} />
            {user.recipes.length === 0 ? <p>what to do</p> :
                <div className='user-recipe-cards-container'>
                    {userRecipes.map(userRecipe => <UserRecipeCard userRecipe={userRecipe} key={userRecipe.id} handleDeleteUserRecipe={handleDeleteUserRecipe} />)}
                </div>
            }
        </div>
    )
}

export default UserRecipes;
