import { useParams } from 'react-router-dom'


function UserRecipeDetail({ recipes }) {
    const { id } = useParams();

    const userRecipeDetails = recipes.filter(recipe => recipe.id == id)

    return (
        <div className='recipe-card-container'>
            <h1>{userRecipeDetails[0].title}</h1>
            <img className='recipe-img' src={userRecipeDetails[0].img_url} />
            <p>{userRecipeDetails[0].description}</p>
            <p>{userRecipeDetails[0].measurements_ingredients}</p>
            <p>{userRecipeDetails[0].directions}</p>
        </div>
    )
}

export default UserRecipeDetail;