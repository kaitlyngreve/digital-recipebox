import { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ setIsAuthenticated, handleUpdateUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault();
        const user = {
            username: username,
            password
        }

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then(res => {
                if (res) {
                    res.json()
                        .then(user => {
                            handleUpdateUser(user)
                            setIsAuthenticated(true)
                        })
                        .then(history.push("/homepage"))

                } else {
                    res.json()
                        .then(json => setError(json.error))
                }
            })
        setUsername("")
        setPassword("")
    }

    function handleGoToSignUp(e) {
        e.preventDefault()
        history.push("/signup")
    }

    return (
        <div className='login-background'>
            <div className='login-container'>
                <h1>RecipeBox</h1>
                <form onSubmit={handleSubmit} className='login-form'>
                    <label htmlFor="username">Username:  </label>
                    <input
                        className="login-form-input"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br></br>
                    <label>Password:  </label>
                    <input
                        className="login-form-input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className='login-page-button-container'>
                        <button className='login-page-button' type="submit">Login</button>
                        <button type="login-button" className='login-page-button' onClick={handleGoToSignUp}>Click Here to Signup</button>
                    </div>
                    {error ? <div>{error}</div> : null}
                </form>
            </div>
        </div>
    );
}

export default Login;