import UserRecipeForm from "./UserRecipeForm";
import UserRecipeCard from "./UserRecipeCard";
import { useState } from 'react'
import Welcome from "./Welcome";

function UserRecipes({ recipes, user, handleNewUserRecipe, handleDeleteUserRecipe, cuisines }) {
    const [isFormClicked, setIsFormClicked] = useState(false)
    const [isAddRecipe, setIsAddRecipe] = useState(false)

    const userRecipes = recipes.filter(recipe => recipe.user_id === user.id)

    const handleFormClick = () => {
        setIsFormClicked(isFormClicked => !isFormClicked)
    }

    const handleAddRecipe = () => {
        setIsAddRecipe(isAddRecipe => !isAddRecipe)
    }

    return (
        <div>
            {isFormClicked ?
                <UserRecipeForm handleNewUserRecipe={handleNewUserRecipe} user={user} cuisines={cuisines} />
                : <button className="plus-sign" onClick={handleFormClick} > + </button>}
            {userRecipes.length === 0 ?
                <Welcome user={user} />
                :
                <div className='user-recipe-cards-container'>
                    {userRecipes.map(userRecipe => <UserRecipeCard
                        userRecipe={userRecipe}
                        key={userRecipe.id}
                        handleAddRecipe={handleAddRecipe}
                        handleDeleteUserRecipe={handleDeleteUserRecipe} />)}
                </div>
            }
        </div>
    )
}

export default UserRecipes;
