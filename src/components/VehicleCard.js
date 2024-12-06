import React from 'react';

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2">{vehicle.make}</h2>
      <p className="text-gray-700">{vehicle.model}</p>
      <p className="text-gray-700">{vehicle.year}</p>
    </div>
  );
};

export default VehicleCard;