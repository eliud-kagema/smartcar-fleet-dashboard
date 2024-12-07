import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useClerk } from '@clerk/clerk-react';
import { setUser } from '../actions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.vehicles);
  const { user } = useClerk();

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [user, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Fleet Management Dashboard</h1>
      <p>Welcome, {user ? user.username : 'User'}!</p>
      {/* No vehicle data to display */}
    </div>
  );
};

export default Dashboard;
