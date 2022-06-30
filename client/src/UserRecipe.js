import UserRecipeForm from "./UserRecipeForm";

function UserRecipes({ recipes }) {

    return (
        <div>
            <UserRecipeForm recipes={recipes} />
        </div>
    )
}

export default UserRecipes;
