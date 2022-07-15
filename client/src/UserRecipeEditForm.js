import { useState } from 'react'

function UserRecipeEditForm({ user, recipe, handleUpdatedRecipe }) {
    const [title, setTitle] = useState(recipe.title)
    const [description, setDescription] = useState(recipe.description)
    const [measurementsIngredients, setMeasurementsIngredients] = useState(recipe.measurements_ingredients)
    const [directions, setDirections] = useState(recipe.directions)
    const [imgUrl, setImgUrl] = useState(recipe.img_url)

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`/recipes/${recipe.id}`, {
            method: 'PATCH',
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
            })
        })
            .then(r => r.json())
            .then(data => handleUpdatedRecipe(data))
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>🥕 Update Recipe 🥕</h1>
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
                    <input
                        className="form-inputs"
                        type="text"
                        placeholder='...'
                        value={description}
                        onChange={e => setDescription(e.target.value)}>
                    </input>
                </label>
                <label className="form-label">
                    Ingredients:
                    <textarea
                        rows='5'
                        cols='30'
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
                        rows='5'
                        cols='30'
                        className="form-inputs"
                        type="text"
                        placeholder='...'
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
                <button className='form-button button' >Update Recipe!</button>
            </form>
        </div>
    )
}

export default UserRecipeEditForm