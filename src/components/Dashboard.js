import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useClerk } from '@clerk/clerk-react';
import { setUser } from '../actions';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate for navigation

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate hook
  const { user, signOut } = useClerk();

  useEffect(() => {
    if (user) {
      dispatch(setUser(user)); // Store user in Redux if it's available
    }
  }, [user, dispatch]);

  const handleLogout = () => {
    signOut(); // Trigger logout using Clerk's signOut method
    navigate('/sign-in'); // Redirect to sign-in page after logging out
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
        <ul>
          <li className="mb-4 hover:bg-gray-700 p-2 rounded cursor-pointer">
            <Link to="/">Home</Link> {/* Using Link for navigation */}
          </li>
          <li className="mb-4 hover:bg-gray-700 p-2 rounded cursor-pointer">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="mb-4 hover:bg-gray-700 p-2 rounded cursor-pointer">
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Fleet Management Dashboard</h1>
          <div className="mb-4 text-xl">Welcome, {user ? user.username : 'User'}!</div>

          {/* User Profile */}
          <div className="mb-8 bg-gray-50 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
            {user ? (
              <>
                <p className="mb-2"><strong>Full Name:</strong> {user.firstName} {user.lastName}</p>
                <p className="mb-2"><strong>Email:</strong> {user.emailAddresses[0]?.emailAddress}</p>
              </>
            ) : (
              <div>Loading profile information...</div>
            )}
          </div>

          {/* Placeholder for future data */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Fleet Overview</h2>
            <p>No vehicles to display yet. You can manage your fleet data here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
