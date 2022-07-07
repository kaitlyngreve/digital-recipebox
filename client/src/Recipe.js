import RecipeCard from "./RecipeCard"
import Search from "./Search"

function Recipe({ recipes, user, handleSearchRecipes, searchRecipes, arrayOfUsers }) {

    let sortedRecipes = recipes.sort(() => Math.random() - 0.5)

    return (
        <div className="recipe-cards-container">
            <h1>Welcome, {user.username}!</h1>
            <Search handleSearchRecipes={handleSearchRecipes} searchRecipes={searchRecipes} />
            {sortedRecipes.slice(0, 5).map(recipe => <RecipeCard recipe={recipe} key={recipe.id} />)}
        </div>
    )
}

export default Recipe;