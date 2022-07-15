import RecipeCard from "./RecipeCard"
import Search from "./Search"
import { useState, useEffect } from 'react'
import Slider from 'react-slick'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

function Recipe({ user, setLikes, likes, recipes }) {
    const [errors, setErrors] = useState([]);
    const [recipeIndex, setRecipeIndex] = useState(0)


    let sortedRecipes = recipes.sort(() => Math.random() - 0.5)


    const NextArrow = ({ onClick }) => {
        return (
            <div className='arrow next' onClick={onClick}>
                <FaArrowRight />
            </div>
        )
    }

    const PrevArrow = ({ onClick }) => {
        return (
            <div className='arrow prev' onClick={onClick}>
                <FaArrowLeft />
            </div>
        )
    }

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setRecipeIndex(next)
    }


    return (
        <div className="recipe-cards-container">
            <div className='header-div section-card'>
                <div className="info-div">
                    <h1>👋 Welcome, {user.username}! 👋</h1>
                    <p>Say hello to Recipy - a digital recipe box.</p>
                    <p>To get started, browse recipes from others below</p>
                    <p> - OR - </p>
                    <p>Head to the 'my recipes' tab to view & create your own!</p>
                </div>
            </div>
            <div className="slider-main-container section-card">
                <h1>🥕 Browse Recipes 🥕</h1>
                <div className="slider-container">
                    <Slider {...settings}>
                        {sortedRecipes.slice(0, 9).map((recipe, idx) => <RecipeCard recipe={recipe} key={recipe.id} user={user} idx={idx} recipeIndex={recipeIndex} setLikes={setLikes} likes={likes} />)}
                    </Slider>
                </div>
            </div>
        </div >
    )
}

export default Recipe;