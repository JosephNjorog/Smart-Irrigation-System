import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSignUp, setIsSignUp] = useState(true); // State to toggle between Sign Up and Sign In

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

  const handleSignIn = async (e) => {
    e.preventDefault();
    // Simulate sign-in logic
    console.log('Signing in with:', email, password);
    // Implement your sign-in logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
        
        {isSignUp ? (
          <>
            {!isCodeSent ? (
              <form onSubmit={handleSignUp}>
                <input 
                  type="email" 
                  placeholder="Email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                  className="w-full p-2 border border-gray-300 rounded mb-4"
                />
                <input 
                  type="password" 
                  placeholder="Password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                  className="w-full p-2 border border-gray-300 rounded mb-4"
                />
                <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200">
                  Send Verification Code
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyCode}>
                <input 
                  type="text" 
                  placeholder="Verification Code" 
                  value={verificationCode} 
                  onChange={(e) => setVerificationCode(e.target.value)} 
                  required 
                  className="w-full p-2 border border-gray-300 rounded mb-4"
                />
                <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition duration-200">
                  Verify Code
                </button>
                {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
              </form>
            )}
          </>
        ) : (
          <form onSubmit={handleSignIn}>
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200">
              Sign In
            </button>
          </form>
        )}
        
        <p className="text-center mt-4">
          {isSignUp ? (
            <>
              Already have an account? 
              <button 
                onClick={() => setIsSignUp(false)} 
                className="text-blue-600 underline ml-1"
              >
                Sign In
              </button>
            </>
          ) : (
            <>
              Don't have an account? 
              <button 
                onClick={() => setIsSignUp(true)} 
                className="text-blue-600 underline ml-1"
              >
                Sign Up
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default SignUp;
