import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import './Login.css';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation (check if fields are filled)
    if (!email || !password) {
      setError('Please fill in both email and password fields.');
      return;
    }

    try {
      await onLogin({ email, password });
    } catch (err) {
      // Handle authentication errors (e.g., invalid credentials)
      setError(err.message || 'Login failed. Please try again.'); 
    }
     
      // 1. Basic Validation 
      // if (!email || !password) {
      //   setError('Please fill in all fields.');
      //   return;
      // }
  
      // 2. Send Login Request to Backend
      // try {
      //   const response = await fetch('/api/login', {  // Adjust your API endpoint
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify({ email, password }),
      //   });
  
        // if (response.ok) { // Successful login
        //   const user = await response.json(); // Get user data from response (optional)
          // onLogin(user); // Update authentication state (e.g., set token)
          // navigate('/'); // Redirect to home page
      //   } else {
      //     const errorData = await response.json();
      //     setError(errorData.message || 'Login failed.');
      //   }
      // } catch (err) {
      //   setError('An error occurred during login.');
        // console.error(err); // Log the error for debugging
    //   }
    // };
    
  
    // return (
    //   // ... (rest of the component - JSX structure is the same)
    // );
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
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
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;
