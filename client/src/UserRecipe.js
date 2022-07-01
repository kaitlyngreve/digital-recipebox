import UserRecipeForm from "./UserRecipeForm";
import UserRecipeCard from "./UserRecipeCard";

function UserRecipes({ recipes, user, handleNewUserRecipe, handleDeleteUserRecipe, cuisines }) {


    const userRecipes = recipes.filter(recipe => recipe.user_id === user.id)

    return (
        <div>
            <UserRecipeForm handleNewUserRecipe={handleNewUserRecipe} user={user} cuisines={cuisines} />
            {userRecipes.map(userRecipe => <UserRecipeCard userRecipe={userRecipe} key={userRecipe.id} handleDeleteUserRecipe={handleDeleteUserRecipe} />)}
        </div>
    )
}

export default UserRecipes;
