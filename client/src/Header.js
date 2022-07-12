import NavBar from "./NavBar";

function Header({ user, setUser }) {

    return (
        <div className='ultimate-header-container'>
            <div className="header-container" >
                <div className="title-container">
                    <h1 className="title">Recipy</h1>
                </div>
                <NavBar user={user} setUser={setUser} />
            </div>
        </div>
    )
}

export default Header;