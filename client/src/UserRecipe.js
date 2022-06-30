import UserRecipeForm from "./UserRecipeForm";
import UserRecipeCard from "./UserRecipeCard";

function UserRecipes({ recipes, user }) {

    // console.log(recipes)
    // console.log(user)
    const userRecipes = recipes.filter(recipe => recipe.user_id === user.id)
    console.log(userRecipes)

    return (
        <div>
            <UserRecipeForm />
            {userRecipes.map(userRecipe => <UserRecipeCard userRecipe={userRecipe} key={userRecipe.id} />)}
        </div>
    )
}

export default UserRecipes;
