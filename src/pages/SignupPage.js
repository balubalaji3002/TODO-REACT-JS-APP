import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const handleSignup = () => {
        // Check if the user already exists in localStorage
        const usersData = JSON.parse(localStorage.getItem('usersData')) || [];
        const userExists = usersData.some((user) => user.email === email);

        if (userExists) {
            alert('User with this email already exists. Please use a different email or login.');
        } else {
            // Add the new user to the localStorage and authenticate
            const newUser = {
                email: email,
                password: password,
            };

            usersData.push(newUser);
            localStorage.setItem('usersData', JSON.stringify(usersData));
            sessionStorage.setItem('currentUser', JSON.stringify(newUser));
            navigate('/'); // Use navigate to redirect instead of useHistory
        }
    };

    return (
        <div className="signup-page">
            <h2>Sign Up</h2>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleSignup}>Sign Up</button>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
};

export default SignupPage;
