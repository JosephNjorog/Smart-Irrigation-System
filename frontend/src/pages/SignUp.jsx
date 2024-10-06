import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    // Simulate sending verification code to user's email
    console.log('Sending verification code to:', email);
    setIsCodeSent(true);
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    // Simulate verification of the code
    if (verificationCode === '123456') { // Replace with actual verification logic
      console.log('Verification successful!');
      // Proceed to create user profile
    } else {
      setErrorMessage('Invalid verification code.');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {!isCodeSent ? (
        <form onSubmit={handleSignUp}>
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
          <button type="submit">Send Verification Code</button>
        </form>
      ) : (
        <form onSubmit={handleVerifyCode}>
          <input 
            type="text" 
            placeholder="Verification Code" 
            value={verificationCode} 
            onChange={(e) => setVerificationCode(e.target.value)} 
            required 
          />
          <button type="submit">Verify Code</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      )}
    </div>
  );
};

export default SignUp;