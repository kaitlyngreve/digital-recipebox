import UserRecipeForm from "./UserRecipeForm";
import UserRecipeCard from "./UserRecipeCard";
import { useState } from 'react'
import Welcome from "./Welcome";
import Search from './Search'

function UserRecipes({ recipes, user, handleNewUserRecipe, handleDeleteUserRecipe, cuisines, handleSearchRecipes, searchRecipes, likes, setLikes }) {
    const [isFormClicked, setIsFormClicked] = useState(false)
    const [isAddRecipe, setIsAddRecipe] = useState(false)

    const userRecipes = recipes.filter(recipe => recipe.user_id === user.id)
    console.log(userRecipes)

    const handleFormClick = () => {
        setIsFormClicked(isFormClicked => !isFormClicked)
    }

    const handleAddRecipe = () => {
        setIsAddRecipe(isAddRecipe => !isAddRecipe)
    }

    return (
        <div>
            <div className="top-bar">
                <Search handleSearchRecipes={handleSearchRecipes} searchRecipes={searchRecipes} />
                {isFormClicked ?
                    <UserRecipeForm handleNewUserRecipe={handleNewUserRecipe} user={user} cuisines={cuisines} />
                    : <button className="plus-sign button section-card section-contained" onClick={handleFormClick} >Add Recipe +</button>}
            </div>
            {userRecipes.length === 0 ?
                <Welcome user={user} />
                :
                <div className='user-recipe-cards-container'>
                    {userRecipes.map(userRecipe => <UserRecipeCard
                        userRecipe={userRecipe}
                        key={userRecipe.id}
                        handleAddRecipe={handleAddRecipe}
                        handleDeleteUserRecipe={handleDeleteUserRecipe} likes={likes} />)}
                </div>
            }
        </div>
    )
}

export default UserRecipes;
