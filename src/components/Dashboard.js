import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useClerk } from '@clerk/clerk-react';
import { setUser } from '../actions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useClerk();

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [user, dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Fleet Management Dashboard</h1>
      <p>Welcome, {user ? user.firstName : 'User'}!</p>
    </div>
  );
};

export default Dashboard;