import { useState } from 'react'


function RecipeCard({ recipe }) {
    const [isLiked, setIsLiked] = useState(false)

    const handleLike = () => {
        setIsLiked(isLiked => !isLiked)
    }

    return (
        <div className='recipe-card-container'>
            <p>{recipe.title}</p>
            <img className='recipe-img' src={recipe.img_url} />
            <p>{recipe.description}</p>
            <button className='like-button' onClick={handleLike}>{isLiked ? "💖" : "🖤"}</button>
        </div>
    )
}

export default RecipeCard;