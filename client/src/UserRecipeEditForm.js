import { useState } from 'react'

function UserRecipeEditForm({ user, recipe }) {
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
            .then(data => console.log(data))
    }


    return (
        <div>
            <form onSubmit={handleSubmit} className="form-container">
                <h4 className="form-header">Create New Recipe</h4>
                <label className="form-label">Recipe Title:
                    <input
                        className="form-inputs"
                        type="text"
                        placeholder='Recipe Title'
                        value={title}
                        onChange={e => setTitle(e.target.value)}>
                    </input>
                </label>
                <label>
                    Description
                    <input
                        className="form-inputs"
                        type="text"
                        placeholder='...'
                        value={description}
                        onChange={e => setDescription(e.target.value)}>
                    </input>
                </label>
                <label>
                    Ingredients
                    <input
                        className="form-inputs"
                        type="text"
                        placeholder='Ingredients & Measurements'
                        value={measurementsIngredients}
                        onChange={e => setMeasurementsIngredients(e.target.value)}>
                    </input>
                </label>
                <br></br>
                <br></br>
                <label>
                    Directions
                    <input
                        className="form-inputs"
                        type="text"
                        placeholder='...'
                        value={directions}
                        onChange={e => setDirections(e.target.value)}>
                    </input>
                </label>
                <label>
                    Image
                    <input
                        className="form-inputs"
                        type="text"
                        placeholder='Food Image'
                        value={imgUrl}
                        onChange={e => setImgUrl(e.target.value)}>
                    </input>
                </label>
                <button>Update Recipe!</button>
            </form>
        </div>
    )
}

export default UserRecipeEditForm