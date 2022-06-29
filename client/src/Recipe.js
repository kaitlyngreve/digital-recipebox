import RecipeCard from "./RecipeCard";

function Recipe({ recipes }) {

    return (
        <div>
            {recipes.map(recipe => <RecipeCard recipe={recipe} />)}
        </div>
    )
}

export default Recipe;