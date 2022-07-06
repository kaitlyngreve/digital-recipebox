import NavBar from "./NavBar";

function Header({ user }) {

    return (
        <div className='ultimate-header-container'>
            <div className="header-container" >
                <div className="title-container">
                    <h1 className="title">RecipeBox</h1>
                </div>
                <NavBar user={user} />
            </div>
        </div>
    )
}

export default Header;