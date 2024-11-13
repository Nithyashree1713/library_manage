import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { usehostalstore } from '../store/hostal.js';
import './Signin.css';

function Signin() {
    const [account, setAccount] = useState({
        email: "",
        password: "",
    });
    const [message, setMessage] = useState("");

    const { signInAccount } = usehostalstore();
    const navigate = useNavigate(); // Initialize navigate hook

    const signIn = async () => {
        const response = await signInAccount(account);
        console.log('Response from sign-in:', response);
        const { success, message, data } = response;
        setMessage(data);
        console.log(message);

        if (success) {
            navigate("/home"); // Use navigate for redirecting to /home on successful sign-in
        } else {
            setAccount({ email: "", password: "" });
        }
    };

    // Handle navigate to signup page using navigate
    const navigateToSignup = () => {
        navigate("/signup"); // Navigate to /signup when the user clicks "Sign up"
    };

    return (
        <div className="signin-container">
            <h1>SIGN IN AS STUDENT</h1><br />
            <div className="input-row">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    value={account.email}
                    id="email"
                    placeholder="Enter your email"
                    onChange={(e) => setAccount({ ...account, email: e.target.value })}
                />
            </div>
            <div className="input-row">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    value={account.password}
                    id="password"
                    placeholder="Enter your password"
                    onChange={(e) => setAccount({ ...account, password: e.target.value })}
                />
            </div>
            <button type="button" onClick={signIn}>SIGN IN</button><br />
            {message && <p className="message">{message}</p>}
            <p>
                Don't have an account? 
                <button onClick={navigateToSignup} className="signup-link">
                    Sign up
                </button>
            </p>
        </div>
    );
}

export default Signin;
