import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-6">Welcome to Smart Irrigation & Crop Monitoring</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/irrigation" className="bg-blue-500 text-white p-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          <h2 className="text-2xl font-semibold mb-2">Irrigation Management</h2>
          <p>Monitor and control your irrigation systems</p>
        </Link>
        <Link to="/crop-health" className="bg-green-500 text-white p-6 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
          <h2 className="text-2xl font-semibold mb-2">Crop Health</h2>
          <p>Track and analyze crop health data</p>
        </Link>
        <Link to="/sensor-data" className="bg-yellow-500 text-white p-6 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
          <h2 className="text-2xl font-semibold mb-2">Sensor Data</h2>
          <p>View real-time sensor data and analytics</p>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;