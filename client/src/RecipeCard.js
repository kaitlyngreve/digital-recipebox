import { useState } from 'react'
import { Link } from 'react-router-dom'


function RecipeCard({ recipe, idx, recipeIndex, user, likes, setLikes }) {
    const [isLiked, setIsLiked] = useState(false)
    const [alreadyLiked, setAlreadyLike] = useState([])

    const onLikeClick = (e) => {
        e.preventDefault()

        const recipeObj = {
            title: recipe.title,
            description: recipe.description,
            measurements_ingredients: recipe.measurements_ingredients,
            directions: recipe.directions,
            img_url: recipe.img_url,
            user_id: user.id,
        }

        console.log(recipeObj)

        fetch('/recipes', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipeObj)
        })
            .then(r => r.json())
            .then(data => saveLike(data))

        const saveLike = (recipeData) => {
            const likeObj = {
                recipe_id: recipeData.id,
                user_id: user.id
            }

            console.log(likeObj)
            fetch('/likes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(likeObj)
            })
                .then(r => r.json())
                .then(console.log)
        }
        setIsLiked(!isLiked)
    }


    return (
        <div className={idx === recipeIndex ? 'slide activeSlide' : 'slide'}>
            <div className='recipe-slide-div'>
                <div className='top-of-recipe'>
                    <p>{recipe.title}</p>
                    <button onClick={onLikeClick} className='like-button button'>{isLiked ? "Liked 🥕" : "Like 🖤"}</button>
                </div>
                <Link to={`/recipes/${recipe.id}`} >
                    <img className='recipe-img' src={recipe.img_url} />
                </Link>
            </div>
        </div>
    )
}

export default RecipeCard;