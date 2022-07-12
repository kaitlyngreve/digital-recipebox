import RecipeCard from "./RecipeCard"
import Search from "./Search"
import { useState, useEffect } from 'react'
import Liked from './Liked'

function Recipe({ user, handleSearchRecipes, searchRecipes, recipes }) {
    const [errors, setErrors] = useState([]);


    let sortedRecipes = recipes.sort(() => Math.random() - 0.5)
    console.log("I am the one you are looking for", sortedRecipes)

    // const recipe = recipes.filter(recipe => recipe.id)

    // let recipesToDisplay = recipes.filter((recipe) => {
    //     recipe.title.toLowerCase().includes(searchRecipes.toLowerCase())
    // })


    return (
        <div className="recipe-cards-container">
            <h1>Welcome, {user.username}!</h1>
            <Search handleSearchRecipes={handleSearchRecipes} searchRecipes={searchRecipes} />
            {sortedRecipes.slice(0, 5).map(recipe => <RecipeCard recipe={recipe} key={recipe.id} user={user} />)}
        </div>
    )
}

export default Recipe;