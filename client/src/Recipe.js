import RecipeCard from "./RecipeCard"

function Recipe({ recipes, user }) {

    return (
        <div className="recipe-cards-container">
            <h1>Welcome, {user.username}!</h1>
            {recipes.slice(0, 5).map(recipe => <RecipeCard recipe={recipe} key={recipe.id} />)}
        </div>
    )
}

export default Recipe;