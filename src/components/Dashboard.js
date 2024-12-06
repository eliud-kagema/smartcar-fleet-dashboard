import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVehiclesRequest, fetchVehiclesSuccess, fetchVehiclesFailure } from '../actions/vehicles';
import { fetchVehicles } from '../apiService';
import VehicleCard from './VehicleCard';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading, vehicles, error } = useSelector((state) => state.vehicles);

  useEffect(() => {
    const getVehicles = async () => {
      dispatch(fetchVehiclesRequest());
      try {
        const data = await fetchVehicles();
        dispatch(fetchVehiclesSuccess(data));
      } catch (error) {
        dispatch(fetchVehiclesFailure(error.message));
      }
    };

    getVehicles();
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Fleet Management Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;