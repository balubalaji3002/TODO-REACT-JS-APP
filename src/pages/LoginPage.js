import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const handleLogin = () => {
        // Check if the user exists in localStorage and authenticate
        const usersData = JSON.parse(localStorage.getItem('usersData')) || [];
        const user = usersData.find((user) => user.email === email && user.password === password);

        if (user) {
            // Authentication successful, store the user info in session storage and redirect to the TodoPage
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            navigate('/'); // Use navigate to redirect instead of useHistory
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
            <p>
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
        </div>
    );
};

export default LoginPage;
