import { useParams, useHistory } from 'react-router-dom'
import { useState } from 'react'
import UserRecipeEditForm from './UserRecipeEditForm';


function UserRecipeDetail({ recipes, user, handleUpdatedRecipe }) {
    const { id } = useParams();
    const [isEdit, setIsEdit] = useState(false)
    const [isClicked, setIsCliked] = useState(false)
    let history = useHistory()

    const handleUpdateClick = () => {
        setIsEdit(isEdit => !isEdit)
        setIsCliked(isClicked => !isClicked)
    }

    const userRecipeDetails = recipes.filter(recipe => recipe.id == id)

    const handleGoBack = () => {
        history.push('/myrecipes')
    }

    return (
        <div className=' section-contained '>
            <button className='form-button button' onClick={handleGoBack} >Back ←</button>
            <div className='section-card padding-none text-align-left'>
                <img className='user-recipe-img' src={userRecipeDetails[0].img_url} />
                <div className='padding-50px'>
                    <h1 className='recipe-header'>{userRecipeDetails[0].title}</h1>
                    <p className='recipe-description'>{userRecipeDetails[0].description}</p>
                    <hr />
                    <p className='recipe-detail-header'>Ingredients:</p>
                    <p className='recipe-details'>{userRecipeDetails[0].measurements_ingredients}</p>
                    <p className='recipe-detail-header'>Directions:</p>
                    <p className='recipe-details'>{userRecipeDetails[0].directions}</p>
                    <button className='form-button button' onClick={handleUpdateClick}>{isClicked ? "Back ←" : "Update Recipe"}</button>
                    {isEdit ? <UserRecipeEditForm user={user} recipe={userRecipeDetails[0]} handleUpdatedRecipe={handleUpdatedRecipe} /> : null}
                </div>
            </div>
        </div >
    )
}

export default UserRecipeDetail;