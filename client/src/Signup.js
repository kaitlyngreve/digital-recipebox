import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Signup({ handleUpdateUser, setIsAuthenticated, setError }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
            }),
        })
            .then(res => {
                if (res) {
                    res.json()
                        .then(history.push("/homepage"))
                        .then(user => {
                            handleUpdateUser(user)
                            setIsAuthenticated(true)
                        })

                } else {
                    res.json()
                        .then(json => setError(json.error))
                }
            })
    }

    const history = useHistory()

    return (
        <div className='signup'>
            <form onSubmit={handleSubmit} >
                <label htmlFor="username">Username:  </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br></br>
                <label htmlFor="password">Password:  </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br></br>
                <label htmlFor="password_confirmation">Confirm Password:  </label>
                <input
                    type="password"
                    id="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <button type="submit"> Submit </button>
            </form>
        </div>
    );
}

export default Signup;