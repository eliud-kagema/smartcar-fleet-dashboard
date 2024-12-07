import React from 'react';
import { useClerk } from '@clerk/clerk-react';

const Login = () => {
  const { openSignIn } = useClerk();

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center relative" style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?nature")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for contrast */}
      <div className="text-center text-white z-10 p-6">
        <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeIn">Welcome Back!</h1>
        <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-1s">Please sign in to continue</p>
        <button
          onClick={() => openSignIn()}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-all transform hover:scale-105"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
