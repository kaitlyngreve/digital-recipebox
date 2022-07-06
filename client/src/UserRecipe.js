import UserRecipeForm from "./UserRecipeForm";
import UserRecipeCard from "./UserRecipeCard";
import { useState, useEffect } from 'react'

function UserRecipes({ recipes, user, handleNewUserRecipe, handleDeleteUserRecipe, cuisines }) {

    const userRecipes = recipes.filter(recipe => recipe.user_id === user.id)



    return (
        <div>
            <UserRecipeForm handleNewUserRecipe={handleNewUserRecipe} user={user} cuisines={cuisines} />
            {user.recipes.length === 0 ?
                <div>
                    <p>Hello {user.username}! Welcome to RecipeBox, a social media platform for sharing and creating recipes.
                        Here, you will find your recipes. To get started, click on the ' + ' to write your first recipe! Once it has been
                        created, you will be able to click on it to view all details, update it, and remove it from your dock.
                    </p>
                    <p>Don't forget to head over to the homepage and like other peoples recipes!</p>
                </div>
                :
                <div className='user-recipe-cards-container'>
                    {userRecipes.map(userRecipe => <UserRecipeCard userRecipe={userRecipe} key={userRecipe.id} handleDeleteUserRecipe={handleDeleteUserRecipe} />)}
                </div>
            }
        </div>
    )
}

export default UserRecipes;
