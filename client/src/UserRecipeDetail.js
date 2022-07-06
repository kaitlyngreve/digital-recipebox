import { useParams, useHistory } from 'react-router-dom'
import { useState } from 'react'
import UserRecipeEditForm from './UserRecipeEditForm';


function UserRecipeDetail({ recipes, user }) {
    const { id } = useParams();
    const [isEdit, setIsEdit] = useState(false)
    let history = useHistory()

    const handleUpdateClick = () => {
        setIsEdit(isEdit => !isEdit)
    }

    const userRecipeDetails = recipes.filter(recipe => recipe.id == id)

    const handleGoBack = () => {
        history.push('/myrecipes')
    }

    return (
        <div className='recipe-card-container'>
            <button onClick={handleGoBack} > back </button>
            <h1>{userRecipeDetails[0].title}</h1>
            <img className='recipe-img' src={userRecipeDetails[0].img_url} />
            <p>{userRecipeDetails[0].description}</p>
            <p>{userRecipeDetails[0].measurements_ingredients}</p>
            <p>{userRecipeDetails[0].directions}</p>
            <button onClick={handleUpdateClick}>update recipe</button>
            {isEdit ? <UserRecipeEditForm user={user} recipe={userRecipeDetails[0]} /> : null}
        </div>
    )
}

export default UserRecipeDetail;