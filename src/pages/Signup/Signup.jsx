import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import './src/Signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

        // TODO: Send registration data to backend (replace with API call)
    // Example:
    // try {
    //   const response = await fetch('/api/signup', {
    //     method: 'POST',
    //     body: JSON.stringify({ email, password }),
    //     headers: { 'Content-Type': 'application/json' },
    //   });
    //   // Handle response (success/error)
    // } catch (error) {
    //   setError("Signup failed. Please try again.");
    // }

  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input 
            type="password" 
            id="confirmPassword" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;