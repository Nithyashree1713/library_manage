import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigate hook
import { usehostalstore } from '../store/hostal.js';
import './Signin.css';

function Signinadmin() {
    const [account, setAccount] = useState({
        email: "",
        password: "",
    });
    const [message, setMessage] = useState("");

    const { signInAccountadmin } = usehostalstore();
    const navigate = useNavigate(); // Use the navigate hook

    const signIn = async () => {
        const response = await signInAccountadmin(account);
        console.log('Response from sign-in:', response);
        const { success, message, isAdmin } = response;
        setMessage(message);
        console.log(message);

        if (success) {
            navigate("/admin"); // Navigate to /admin if sign-in is successful
        } else {
            setAccount({ email: "", password: "" });
        }
    };

    // Handle sign-up navigation with navigate
    const navigateToSignup = () => {
        navigate("/signupadmin"); // Use navigate to go to the signup page
    };

    return (
        <div className="signin-container">
            <h1>SIGN IN AS ADMIN</h1>
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
            <button type="button" onClick={signIn}>SIGN IN</button>
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

export default Signinadmin;
