import UserRecipeForm from "./UserRecipeForm";
import UserRecipeCard from "./UserRecipeCard";
import { useState } from 'react'
import Welcome from "./Welcome";

function UserRecipes({ recipes, user, handleNewUserRecipe, handleDeleteUserRecipe, cuisines }) {
    const [isFormClicked, setIsFormClicked] = useState(false)

    const userRecipes = recipes.filter(recipe => recipe.user_id === user.id)

    const handleFormClick = () => {
        setIsFormClicked(isFormClicked => !isFormClicked)
    }


    return (
        <div>
            {isFormClicked ?
                <UserRecipeForm handleNewUserRecipe={handleNewUserRecipe} user={user} cuisines={cuisines} />
                : <button className="plus-sign" onClick={handleFormClick} > + </button>}
            {user.recipes.length === 0 ?
                <Welcome user={user} />
                :
                <div className='user-recipe-cards-container'>
                    {userRecipes.map(userRecipe => <UserRecipeCard userRecipe={userRecipe} key={userRecipe.id} handleDeleteUserRecipe={handleDeleteUserRecipe} />)}
                </div>
            }
        </div>
    )
}

export default UserRecipes;
