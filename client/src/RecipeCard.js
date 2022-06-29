


function RecipeCard({ recipe }) {

    return (
        <div>
            <p>{recipe.title}</p>
            <img src={recipe.img_url} />
            <p>{recipe.description}</p>
        </div>
    )
}

export default RecipeCard;