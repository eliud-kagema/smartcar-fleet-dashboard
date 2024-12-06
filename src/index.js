import React from 'react';
import ReactDOM from 'react-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './styles/tailwind.css';

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

ReactDOM.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <Provider store={store}>
        <App />
      </Provider>
    </ClerkProvider>
  </React.StrictMode>,
  document.getElementById('root')
);