import RecipeCard from "./RecipeCard";

function Recipe({ recipes }) {

    return (
        <div className="recipe-cards-container">
            {recipes.slice(0, 5).map(recipe => <RecipeCard recipe={recipe} key={recipe.id} />)}
        </div>
    )
}

export default Recipe;