import React, {useState} from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const login = () => {};
    return (
        <div>
            <label>Log In</label>
            <input placeholder="Username"
            onChange={(event) => {
                setUsername(event.target.value);
            }} />
            <input placeholder="Password"
            type="password"
            onChange={(event) => {
                setPassword(event.target.value);
            }} />
            <button onClick={login}>Log In</button>
        </div>
    );
}

export default Login;