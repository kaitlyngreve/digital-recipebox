import NavBar from "./NavBar";

function Header({ user }) {

    return (
        <div className="header-container" >
            <div className="title-container">
                <h1 className="title">RecipeBox</h1>
            </div>
            <NavBar user={user} />
        </div>
    )
}

export default Header;