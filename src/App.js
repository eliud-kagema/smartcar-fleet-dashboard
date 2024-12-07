import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

const App = () => {
  console.log('App component rendered');
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <SignedOut>
              <Login />
            </SignedOut>
          }
        />
        <Route
          path="/"
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