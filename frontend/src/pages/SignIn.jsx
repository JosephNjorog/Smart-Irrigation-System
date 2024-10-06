import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    // Simulate authentication process
    if (email === 'test@example.com' && password === 'password') { // Replace with actual authentication logic
      console.log('Sign in successful!');
      // Redirect to dashboard or home page
      // window.location.href = '/dashboard'; // Uncomment and replace with actual redirection
    } else {
      setErrorMessage('Invalid email or password.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="signin-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit">Sign In</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
        
        <p className="text-center mt-4">
          <a 
            href="/forgot-password" 
            className="text-blue-600 hover:underline"
          >
            Forgot Password?
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
