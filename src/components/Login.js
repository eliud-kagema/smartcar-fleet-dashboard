import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center relative" style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?nature")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for contrast */}
      <div className="text-center text-white z-10 p-6">
        <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeIn">Welcome Back!</h1>
        <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-1s">Please sign in to continue</p>
        
        {/* Using Clerk's SignIn component for proper sign-in flow */}
        <SignIn />
      </div>
    </div>
  );
};

export default Login;
