import React from 'react';
import { useClerk } from '@clerk/clerk-react';

const Login = () => {
  const { openSignIn } = useClerk();

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={() => openSignIn()}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Sign In
      </button>
    </div>
  );
};

export default Login;