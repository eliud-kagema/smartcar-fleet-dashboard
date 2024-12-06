import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <SignedOut>
            <Login />
          </SignedOut>
          <SignedIn>
            <RedirectToSignIn />
          </SignedIn>
        </Route>
        <Route path="/">
          <SignedIn>
            <Dashboard />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;