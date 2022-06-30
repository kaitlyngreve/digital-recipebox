import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Login({ setUser, setIsAuthenticated }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const history = useHistory()

    // const handleUpdateUser = (user) => {
    //     setUser((previousUser) => ({ ...previousUser, user }))
    // }

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
                            setUser(user)
                            setIsAuthenticated(true)
                        })
                        .then(history.push("/homepage"))

                } else {
                    res.json()
                        .then(json => setError(json.error))
                }
            })
    }

    function handleGoToSignUp(e) {
        e.preventDefault()
        history.push("/signup")
    }

    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:  </label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br></br>
                <label>Password:  </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                <button type="login-button" onClick={handleGoToSignUp}>Click Here to Signup</button>
            </form>
            {error ? <div>{error}</div> : null}
        </div>
    );
}

export default Login;