import RecipeCard from "./RecipeCard"
import { useState } from 'react'
import Search from "./Search"

function Recipe({ recipes, user, handleSearchRecipes, searchRecipes }) {
    // const [searchRecipes, setSearchRecipes] = useState("")

    let sortedRecipes = recipes.sort(() => Math.random() - 0.5)

    // const handleSearchRecipes = (e) => {
    //     setSearchRecipes(e.target.value)
    // }

    // const recipesToDisplay = recipes.filter((recipe) => {
    //     return recipe.title.toLowerCase().includes(searchRecipes.toLowerCase())
    // })

    return (
        <div className="recipe-cards-container">
            <h1>Welcome, {user.username}!</h1>
            <Search handleSearchRecipes={handleSearchRecipes} searchRecipes={searchRecipes} />
            {sortedRecipes.slice(0, 5).map(recipe => <RecipeCard recipe={recipe} key={recipe.id} />)}
        </div>
    )
}

export default Recipe;