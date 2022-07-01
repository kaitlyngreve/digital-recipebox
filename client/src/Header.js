import NavBar from "./NavBar";

function Header({ user }) {

    return (
        <div>
            <h1>Digital Recipe Box</h1>
            <NavBar user={user} />
        </div>
    )
}

export default Header;