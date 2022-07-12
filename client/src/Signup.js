import { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";

function Signup({ setUser, setIsAuthenticated, setError }) {
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
                        .then(<Redirect to='/' />)
                        .then(user => {
                            setUser(user)
                            setIsAuthenticated(true)
                        })

                } else {
                    res.json()
                        .then(json => setError(json.error))
                }
            })
    }

    const history = useHistory()

    const handleBack = () => {
        history.push('/login')
    }

    return (
        <div className="login-background">
            <div className='login-container'>
                <h1>Recipy</h1>
                <form onSubmit={handleSubmit} className="login-form">
                    <label htmlFor="username">Username:  </label>
                    <input
                        className="login-form-input"
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br></br>
                    <label htmlFor="password">Password:  </label>
                    <input
                        className="login-form-input"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br></br>
                    <label htmlFor="password_confirmation">Confirm Password:  </label>
                    <input
                        className="login-form-input"
                        type="password"
                        id="password_confirmation"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                    <div className='login-page-button-container'>
                        <button className='login-page-button' type="submit"> Signup! </button>
                        <button onClick={handleBack} className="login-page-button"> 🔙 </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;