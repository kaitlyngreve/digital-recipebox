import { useState } from 'react'
import { Redirect } from 'react-router-dom'

function UserRecipeForm({ handleNewUserRecipe, user, cuisines, handleAddRecipe }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [measurementsIngredients, setMeasurementsIngredients] = useState("")
    const [directions, setDirections] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [cuisine, setCuisine] = useState("")
    const [recipePostError, setRecipePostError] = useState([])

    const handleUpdateErrors = () => {
        setRecipePostError(null)
    }

    const handleSubmit = (e) => {
        e.preventDefault()


        fetch('/recipes', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                description: description,
                measurements_ingredients: measurementsIngredients,
                directions: directions,
                img_url: imgUrl,
                user_id: user.id,
                cuisine_id: cuisine
            })
        })
            .then(res => {
                console.log(res)
                if (res.ok) {
                    res.json().then((data) => {
                        handleNewUserRecipe(data)
                            .then(<Redirect to='/myrecipes' />)
                    })
                }
                else {
                    res.json().then((json) => {
                        setRecipePostError(json.errors)
                    })
                }
            })

        setTitle("")
        setDescription("")
        setMeasurementsIngredients("")
        setDirections("")
        setImgUrl("")
        setCuisine("")
        handleAddRecipe()
    }


    return (
        <div className="section-card section-contained">
            <form onSubmit={handleSubmit} className="form-container">
                <h1 className="form-header">🥕 Create New Recipe 🥕</h1>
                <label className="form-label">Recipe Title:
                    <input
                        className="form-inputs"
                        type="text"
                        placeholder='Recipe Title'
                        value={title}
                        onChange={e => setTitle(e.target.value)}>
                    </input>
                </label>
                <label className="form-label">
                    Description:
                    <textarea
                        rows='5'
                        cols='30'
                        className="form-inputs"
                        type="text"
                        placeholder='...'
                        value={description}
                        onChange={e => setDescription(e.target.value)}>
                    </textarea>
                </label>
                <label className="form-label">
                    Cuisine:
                    <select className='form-dropdown' value={cuisine} onChange={e => setCuisine(e.target.value)}>
                        <option>Select Cuisine</option>
                        {cuisines.map((cuisine) => (
                            <option className='dropdown' value={cuisine.id}>{cuisine.cuisine_type}</option>
                        ))}
                    </select>
                </label>
                <label className="form-label">
                    Ingredients:
                    <textarea
                        rows='10'
                        cols='50'
                        className="form-inputs"
                        type="text"
                        placeholder='Ingredients & Measurements'
                        value={measurementsIngredients}
                        onChange={e => setMeasurementsIngredients(e.target.value)}>
                    </textarea>
                </label>
                <br></br>
                <br></br>
                <label className="form-label">
                    Directions:
                    <textarea
                        rows='10'
                        cols='50'
                        className="form-inputs"
                        type='text'
                        value={directions}
                        onChange={e => setDirections(e.target.value)}>
                    </textarea>
                </label>
                <label className="form-label">
                    Image:
                    <input
                        className="form-inputs"
                        type="text"
                        placeholder='Food Image'
                        value={imgUrl}
                        onChange={e => setImgUrl(e.target.value)}>
                    </input>
                </label>
                <button className='button' onClick={handleUpdateErrors}>Add Recipe to Box</button>
            </form>
            {recipePostError && <div className='error-message'>{recipePostError.join(", ")}</div>}
        </div>
    )
}

export default UserRecipeForm;

