import UserRecipeForm from "./UserRecipeForm";
import UserRecipeCard from "./UserRecipeCard";
import { useState } from 'react'

function UserRecipes({ recipes, user, handleNewUserRecipe }) {


    const userRecipes = recipes.filter(recipe => recipe.user_id === user.id)

    return (
        <div>
            <UserRecipeForm handleNewUserRecipe={handleNewUserRecipe} />
            {userRecipes.map(userRecipe => <UserRecipeCard userRecipe={userRecipe} key={userRecipe.id} />)}
        </div>
    )
}

export default UserRecipes;
