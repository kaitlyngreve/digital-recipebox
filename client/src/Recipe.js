import RecipeCard from "./RecipeCard"

function Recipe({ recipes, user }) {

    let sortedRecipes = recipes.sort(() => Math.random() - 0.5)

    return (
        <div className="recipe-cards-container">
            <h1>Welcome, {user.username}!</h1>
            {sortedRecipes.slice(0, 5).map(recipe => <RecipeCard recipe={recipe} key={recipe.id} />)}
        </div>
    )
}

export default Recipe;