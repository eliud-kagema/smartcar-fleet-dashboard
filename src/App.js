import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth, SignedIn, SignedOut } from '@clerk/clerk-react';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

const App = () => {
  const basename = process.env.NODE_ENV === 'production' ? '/smartcar-fleet-dashboard' : '/';
  const { isSignedIn } = useAuth(); // Clerk's hook to check login status

  console.log('App component rendered');
  
  return (
    <Router basename={basename}>
      <Routes>
        {/* Default route redirects based on authentication */}
        <Route
          path="/"
          element={
            isSignedIn ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Login route */}
        <Route
          path="/login"
          element={
            <SignedOut>
              <Login />
            </SignedOut>
          }
        />

        {/* Dashboard route */}
        <Route
          path="/dashboard"
          element={
            <SignedIn>
              <Dashboard />
            </SignedIn>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
