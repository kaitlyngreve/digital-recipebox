import RecipeCard from "./RecipeCard";

function Recipe({ recipes }) {

    return (
        <div className="recipe-cards-container">
            {recipes.map(recipe => <RecipeCard recipe={recipe} key={recipe.id} />)}
        </div>
    )
}

export default Recipe;