import { useParams, useHistory } from 'react-router-dom'
import { useState } from 'react'
import UserRecipeEditForm from './UserRecipeEditForm';


function UserRecipeDetail({ recipes, user }) {
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
        <div>
            <button className='form-button' onClick={handleGoBack} > 🔙 </button>
            <div className='recipe-card-container-2'>
                <h1 className='recipe-header'>{userRecipeDetails[0].title}</h1>
                <p>{userRecipeDetails[0].description}</p>
                <img className='user-recipe-img' src={userRecipeDetails[0].img_url} />
                <div className='recipe-detail-container'>
                    <p className='recipe-detail-header'>Ingredients:</p>
                    <p className='recipe-details'>{userRecipeDetails[0].measurements_ingredients}</p>
                    <p className='recipe-detail-header'>Directions:</p>
                    <p className='recipe-details'>{userRecipeDetails[0].directions}</p>
                </div>
                <button className='form-button' onClick={handleUpdateClick}>{isClicked ? "🔙" : "Update"}</button>
                {isEdit ? <UserRecipeEditForm user={user} recipe={userRecipeDetails[0]} /> : null}
            </div>
        </div >
    )
}

export default UserRecipeDetail;